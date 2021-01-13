import { IProduct } from "@entities/Product";
import { Rate } from "antd";
import React from "react";
import { Link } from "react-router-dom";
interface IProps {
  product: IProduct;
}
const CardProduct = ({ product }: IProps) => {
  return (
    <Link className="card-product relative block" to={`/product/${product.id}`}>
      <div style={{ height: "200px" }}>
        <img
          src={product.imageThumbnail}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <h1 className=" text-sm font-semibold mt-2 mb-1">{product.name}</h1>
        <Rate value={product.star} disabled className=" text-sm" />
        <p className="text-blue-600 text-xs">{product.street}</p>
        <p className="text-red-1100 hover:text-red-1100 text-lg">
          {product.price} $
        </p>
      </div>
      <div className="absolute bg-blue-700 text-white p-3 top-0 right-0 rounded-bl-lg shadow-x1">
        <span>{product.rating}</span>
      </div>
    </Link>
  );
};
export default React.memo(CardProduct);
