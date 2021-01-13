import { IProduct } from "@entities/Product";
import React from "react";
import CardProduct from "../CardProduct";

interface IProps {
  listProducts: Array<IProduct>;
}

const Products = ({ listProducts }: IProps) => {
  return (
    <div className="products grid grid-cols-3 gap-4">
      {listProducts.map((x: IProduct, index) => (
        <CardProduct key={index} product={x} />
      ))}
    </div>
  );
};
export default React.memo(Products);
