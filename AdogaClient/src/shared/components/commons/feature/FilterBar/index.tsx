import React, { useCallback, useMemo, useState } from "react";
import { Button, Dropdown, Menu, Slider, Switch } from "antd";
import ProductView, {
  IItemSearchProduct,
} from "../../../../../ui/view/AllProduct/useAllProduct";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory, useLocation } from "react-router";
import { parseObjectToSearch, parseSearchToObject } from "@helper/functions";

const ItemOptionProduct = ({
  onChange,
  icon,
  text,
  data,
  defaultChecked,
}: IItemSearchProduct) => {
  return (
    <div className="flex items-center mb-2">
      <span className="flex justify-center items-center rounded-full w-8 h-8 bg-green-400 mr-2">
        <FontAwesomeIcon icon={icon} className="text-white" />
      </span>
      <span className="text-xs w-2/3 ellipsis">{text}</span>
      <Switch
        onChange={(checked) => onChange(checked, data)}
        defaultChecked={defaultChecked}
        className="ml-2"
      />
    </div>
  );
};

const marks = {
  0: {
    style: {
      color: "#f50",
      display: "none",
    },
  },
  10000000: {
    style: {
      color: "#f50",
      display: "none",
    },
  },
};

const FilterBar = ({}) => {
  const history = useHistory();
  const [price, setPrice] = useState([]);
  // const location = useLocation();
  function handleMenuClick(e) {
    console.log("click", e);
  }
  function onChange(value) {
    document.getElementById("min-price").innerHTML = `đ ${value[0]}`;
    document.getElementById("max-price").innerHTML = `đ ${value[1]}`;
  }

  function onAfterChange(value) {
    const dataSearchBefore = parseSearchToObject(history.location.search);
    const dataSearchAfter: any = {
      ...dataSearchBefore,
      PriceFrom: value[0],
      PriceTo: value[1],
    };

    if (value[0] == 0 && value[1] == 10000000) setPrice([]);
    else setPrice(value);

    history.push(
      `${history.location.pathname}${parseObjectToSearch(dataSearchAfter)}`
    );
  }

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">
        <div className="p-4">
          <span className="block mb-8 text-sm font-semibold">
            Price per night
          </span>
          <Slider
            range
            step={10}
            min={0}
            max={10000000}
            defaultValue={[0, 10000000]}
            onChange={onChange}
            onAfterChange={onAfterChange}
            marks={marks}
          />
          <div className="flex justify-between mt-8">
            <div>
              <p className="text-xs">MIN</p>
              <p id="min-price" className="text-xs font-semibold">
                đ 0
              </p>
            </div>
            <div>
              <p className="text-xs">MAX</p>
              <p id="max-price" className="text-xs font-semibold">
                đ 100000000
              </p>
            </div>
          </div>
        </div>
      </Menu.Item>
    </Menu>
  );
  return (
    <div className="header-product relative py-6 shadow-lg ">
      <div className="w-3/5 m-auto flex items-center">
        <p className="mr-2">Filter</p>
        <Dropdown
          overlay={menu}
          trigger={["click"]}
          overlayClassName={"dropdown-filter min-w-px-300"}
        >
          <Button
            className="py-1 px-2 rounded-3xl bg-blue-900 hover:bg-blue-600 text-sm"
            style={{ minWidth: "100px", maxWidth: "150px" }}
          >
            <span className="block w-full ellipsis">
              {price.length == 0
                ? "Your budget"
                : `đ ${price[0]} - đ ${price[1]}`}
            </span>
          </Button>
        </Dropdown>
      </div>
    </div>
  );
};
export default React.memo(FilterBar);
