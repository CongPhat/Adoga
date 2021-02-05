import React, { useEffect, useState } from "react";
import { Button, Dropdown, Menu } from "antd";
import { useHistory, useLocation } from "react-router";
import { parseObjectToSearch, parseSearchToObject } from "@helper/functions";
import SliderFilterPrice from "./SliderFilterPrice";

const FilterPrice = ({}) => {
  const history = useHistory();
  const location = useLocation();
  const [price, setPrice] = useState([]);

  const checkPrice = (priceFrom, priceTo, valueFrom, valueTo) => {
    if (!priceFrom || !priceTo) return [];
    if (priceFrom == valueFrom && priceTo == valueTo) return [];
    return [priceFrom, priceTo];
  };

  function onAfterChange(value) {
    const dataSearchBefore = parseSearchToObject(history.location.search);
    const dataSearchAfter: any = {
      ...dataSearchBefore,
      PriceFrom: value[0],
      PriceTo: value[1],
    };
    setPrice(checkPrice(value[0], value[1], 0, 9999999));
    history.push(
      `${history.location.pathname}${parseObjectToSearch(dataSearchAfter)}`
    );
  }

  const handleClear = () => {
    setPrice([]);
    const dataSearchBefore = parseSearchToObject(history.location.search);
    delete dataSearchBefore["PriceTo"];
    delete dataSearchBefore["PriceFrom"];
    history.push(
      `${history.location.pathname}${parseObjectToSearch(dataSearchBefore)}`
    );
  };

  useEffect(() => {
    const { PriceFrom, PriceTo } = parseSearchToObject(history.location.search);
    setPrice(checkPrice(PriceFrom, PriceTo, 0, 9999999));
  }, [location.search]);

  const menu = (
    <Menu>
      <Menu.Item key="1">
        <div className="p-4">
          <div className="flex justify-between items-center mb-8">
            <span className="block text-sm font-semibold">Price per night</span>
            {price.length > 0 && (
              <span className="text-sm text-blue-600" onClick={handleClear}>
                CLEAR
              </span>
            )}
          </div>
          <SliderFilterPrice price={price} onAfterChange={onAfterChange} />
        </div>
      </Menu.Item>
    </Menu>
  );
  return (
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
          {price.length == 0 ? "Your budget" : `đ ${price[0]} - đ ${price[1]}`}
        </span>
      </Button>
    </Dropdown>
  );
};
export default React.memo(FilterPrice);
