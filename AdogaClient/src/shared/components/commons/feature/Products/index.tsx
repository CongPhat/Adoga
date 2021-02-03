import { IProduct } from "@entities/Product";
import React from "react";
import CardProduct from "../CardProduct";

interface IProps {
  listProducts: Array<IProduct>;
  loading?: boolean;
}

const Products = ({ listProducts, loading = true }: IProps) => {
  const data: Array<IProduct | number> = loading
    ? Array.from(Array(9).keys())
    : listProducts;
  return (
    <div className="products grid lg:grid-cols-2 gap-4 md:grid-cols-2 xs:grid-cols-1 xl:grid-cols-3">
      {data?.map((x: IProduct, index) => (
        <CardProduct key={index} product={x} loading={loading} />
      ))}
    </div>
  );
};
export default React.memo(Products);
