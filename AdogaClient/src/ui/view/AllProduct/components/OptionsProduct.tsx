import React, { useCallback } from "react";
import { Switch } from "antd";
import ProductView, { IItemSearchProduct } from "../useAllProduct";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

const OptionsProduct = ({}) => {
  const onChange = useCallback((checked, data) => {
    presenter.pushSearch(checked, data, "type");
  }, []);
  const onChangeBenefit = useCallback((checked, data) => {
    presenter.pushSearch(checked, data, "benefit");
  }, []);
  const { presenter, data } = ProductView.useSearchProduct(
    onChange,
    onChangeBenefit
  );
  return (
    <div className="search-product relative shadow-lg border border-gray-1100 rounded-md p-2">
      {data.dataItemSearch.map((x) => (
        <ItemOptionProduct
          onChange={x.onChange}
          text={x.text}
          icon={x.icon}
          data={x.data}
          key={x.text}
          defaultChecked={x.defaultChecked}
        />
      ))}
    </div>
  );
};
export default React.memo(OptionsProduct);
