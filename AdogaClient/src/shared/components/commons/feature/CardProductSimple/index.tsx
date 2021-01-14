import { IProduct } from "@entities/Product";
import { Rate } from "antd";
import React from "react";
import { Link } from "react-router-dom";
interface IProps {
  product: IProduct;
}
const CardProductSimple = ({ product }: IProps) => {
  return (
    <Link
      className="card-product-simple relative block border border-gray-1100 hover:shadow-2xl group"
      to={`/product/${product.id}`}
    >
      <div style={{ height: "150px" }}>
        <img
          src={product.imageThumbnail}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="px-2">
        <h1 className=" text-sm font-semibold mt-2 mb-1 group-hover:underline">
          {product.name}
        </h1>
        <p className="text-blue-600 text-xs">{product.street}</p>
        <Rate
          value={product.star}
          disabled
          className=" text-sm text-pink-1000"
        />
        <div className="flex flex-col mt-3 items-end">
          <span className=" px-2 bg-red-1100 text-white uppercase rounded-sm text-sm mb-1">
            {product.discount}% discount
          </span>
          <span className=" text-gray-700 line-through opacity-75 text-xs">
            {product.price} $
          </span>
          <p className="text-red-1000 hover:text-red-1100 text-lg">
            {(product.price * product.discount) / 100} $
          </p>
        </div>
      </div>
      <div className="absolute bg-blue-700 text-white p-3 top-0 right-0 rounded-bl-lg shadow-x1">
        <span>{product.rating}</span>
      </div>
    </Link>
  );
};
export default React.memo(CardProductSimple);
