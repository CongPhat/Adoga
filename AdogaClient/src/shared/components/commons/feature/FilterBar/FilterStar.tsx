import React, { useEffect, useState } from "react";
import { Button, Checkbox, Dropdown, Menu, Rate } from "antd";
import { useHistory, useLocation } from "react-router";
import { parseObjectToSearch, parseSearchToObject } from "@helper/functions";

const arr = [5, 4, 3, 2, 1];

const options = arr.map((x) => ({
  label: <Rate disabled value={x} className=" text-sm" />,
  value: x,
}));

const FilterStar = ({}) => {
  const history = useHistory();
  const [visible, setVisible] = useState(false);
  const [stateStar, setStateStar] = useState([]);
  const location = useLocation();

  function onChange(checkedValues) {
    setStateStar(checkedValues.sort());
    const dataSearchBefore = parseSearchToObject(history.location.search);
    const dataSearchAfter: any = {
      ...dataSearchBefore,
      starRating: checkedValues
        .sort()
        .reduce(
          (string, item, index) => `${index == 0 ? item : `${string},${item}`}`,
          ``
        ),
    };
    history.push(
      `${history.location.pathname}${parseObjectToSearch(dataSearchAfter)}`
    );
  }

  const handleClear = () => {
    setStateStar([]);
    const dataSearchBefore = parseSearchToObject(history.location.search);
    delete dataSearchBefore["starRating"];
    history.push(
      `${history.location.pathname}${parseObjectToSearch(dataSearchBefore)}`
    );
  };

  useEffect(() => {
    const { starRating } = parseSearchToObject(history.location.search);
    if (starRating) {
      setStateStar(starRating.split(",").map((x) => parseInt(x)));
    }
  }, [location.search]);

  const menu = (
    <Menu>
      <Menu.Item key="1">
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <span className="block text-sm font-semibold">Star rating</span>
            {stateStar.length > 0 && (
              <span className="text-sm text-blue-600" onClick={handleClear}>
                CLEAR
              </span>
            )}
          </div>

          <Checkbox.Group onChange={onChange} value={stateStar}>
            <div>
              {options.map((item, index) => (
                <div key={index}>
                  <Checkbox value={item.value}>{item.label}</Checkbox>
                </div>
              ))}
            </div>
          </Checkbox.Group>
        </div>
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown
      overlay={menu}
      trigger={["click"]}
      overlayClassName={"dropdown-filter min-w-px-300"}
      visible={visible}
      onVisibleChange={(flag) => setVisible(flag)}
    >
      <Button
        className="ml-2 py-1 px-2 rounded-3xl bg-blue-900 hover:bg-blue-600 text-sm"
        style={{ minWidth: "90px", maxWidth: "150px" }}
      >
        <span className="block w-full ellipsis">
          {stateStar.length != 0
            ? `${stateStar.length > 1 ? `${stateStar[0]} - ` : ""}  ${
                stateStar[stateStar.length - 1]
              } star`
            : "Star"}
        </span>
      </Button>
    </Dropdown>
  );
};
export default React.memo(FilterStar);
