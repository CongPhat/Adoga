import { IProduct } from "@entities/Product";
import { Rate } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import PriviewImageProduct from "./PreviewImageProduct";
import ProductProperties from "./ProductProperties";
interface IProps {
  product: IProduct;
  loading: boolean;
}
const CardProductProperties = ({ product, loading }: IProps) => {
  console.log(product);

  return (
    <Link
      className="card-product-properties relative flex mt-8 border border-gray-1100 rounded-md hover:shadow-x1 transition duration-300"
      to={`/product/${product.id}`}
    >
      <div className=" w-2/6">
        <PriviewImageProduct images={product.images} />
      </div>
      <div className="w-4/6">
        <ProductProperties product={product} />
      </div>
    </Link>
  );
};
export default React.memo(CardProductProperties);
