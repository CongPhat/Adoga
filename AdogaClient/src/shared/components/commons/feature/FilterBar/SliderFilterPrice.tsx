import React, { useEffect, useState } from "react";
import { Slider } from "antd";
import { useLocation } from "react-router";
import { parseMoneyVND, parseSearchToObject } from "@helper/functions";

const SliderFilterPrice = ({ price, onAfterChange }) => {
  const [stateSliderPrice, setStateSliderPrice] = useState([0, 10000000]);
  const location = useLocation();

  function onChange(value) {
    setStateSliderPrice([value[0], value[1]]);
  }
  useEffect(() => {
    const { PriceFrom, PriceTo } = parseSearchToObject(location.search);
    if (PriceFrom && PriceTo) setStateSliderPrice([PriceFrom, PriceTo]);
  }, [location.search]);

  return (
    <>
      <Slider
        range
        step={10}
        min={0}
        max={10000000}
        defaultValue={price.length == 0 ? [0, 10000000] : price}
        onChange={onChange}
        onAfterChange={(values) => onAfterChange(values)}
        // marks={marks}
      />
      <div className="flex justify-between mt-8">
        <div>
          <p className="text-xs">MIN</p>
          <p id="min-price" className="text-xs font-semibold">
            đ {parseMoneyVND(stateSliderPrice[0])}
          </p>
        </div>
        <div>
          <p className="text-xs">MAX</p>
          <p id="max-price" className="text-xs font-semibold">
            đ {parseMoneyVND(stateSliderPrice[1])}
          </p>
        </div>
      </div>
    </>
  );
};
export default React.memo(SliderFilterPrice);
