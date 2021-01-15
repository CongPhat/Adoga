import { IProduct } from "@entities/Product";
import React from "react";
import CardProduct from "../CardProduct";

interface IProps {
  listProducts: Array<IProduct>;
}

const Products = ({ listProducts }: IProps) => {
  return (
    <div className="products grid lg:grid-cols-2 gap-4 md:grid-cols-2 xs:grid-cols-1 xl:grid-cols-3">
      {listProducts.map((x: IProduct, index) => (
        <CardProduct key={index} product={x} />
      ))}
    </div>
  );
};
export default React.memo(Products);
