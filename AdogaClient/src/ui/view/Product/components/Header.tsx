import React from "react";
import { Rate } from "antd";
interface IHeaderProduct {
  title: string;
  star: number;
  street: string;
}
const HeaderProduct = ({ title, star, street }: IHeaderProduct) => {
  return (
    <>
      <h1 className="font-semibold text-xl mb-1">{title}</h1>
      <div className="flex items-center mb-2">
        <Rate value={star} className="text-sm" disabled />
        <span className="text-xs">{street}</span>
      </div>
    </>
  );
};
export default React.memo(HeaderProduct);
