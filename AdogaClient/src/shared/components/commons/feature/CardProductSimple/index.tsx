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
      className="card-product-simple relative block border border-gray-1100 hover:shadow-2xl group mt-4"
      to={`/product/${product.productId}`}
    >
      <div style={{ height: "150px" }}>
        <img
          src={product.productImageThumbnail}
          alt={product.productName}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="px-2">
        <h1 className=" text-sm font-semibold mt-2 mb-1 group-hover:underline">
          {product.productName}
        </h1>
        <p className="text-blue-600 text-xs">{product.productStreet}</p>
        <Rate
          value={product.productStar}
          disabled
          className=" text-sm text-pink-1000"
        />
        <div className="flex flex-col mt-3 items-end">
          <span className=" px-2 bg-red-1100 text-white uppercase rounded-sm text-sm mb-1">
            {product.productDiscount}% discount
          </span>
          <span className=" text-gray-700 line-through opacity-75 text-xs">
            {product.productPrice} $
          </span>
          <p className="text-red-1000 hover:text-red-1100 text-lg">
            {(product.productPrice * product.productDiscount) / 100} $
          </p>
        </div>
      </div>
      <div className="absolute bg-blue-700 text-white p-3 top-0 right-0 rounded-bl-lg shadow-x1">
        <span>{product.productRating}</span>
      </div>
    </Link>
  );
};
export default React.memo(CardProductSimple);
