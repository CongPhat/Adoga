import { IProduct } from "@entities/Product";
import { parseMoneyVND, priceDiscount } from "@helper/functions";
import { Rate } from "antd";
import React from "react";
import { Link } from "react-router-dom";
interface IProps {
  product: IProduct;
  className?: string;
}
const CardProductSimple = ({ product, className = "" }: IProps) => {
  return (
    <Link
      className={`card-product-simple relative block border border-gray-1100 hover:shadow-2xl group mt-4 ${className}`}
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
        <h1 className=" text-sm-em font-semibold mt-2 mb-1 group-hover:underline ellipsis">
          {product.productName}
        </h1>
        <p className="text-blue-600 text-xs-em ellipsis">
          {product.productStreet}
        </p>
        <Rate
          value={product.productStar}
          disabled
          className=" text-xs-em text-pink-1000"
        />
        <div className="flex flex-col mt-3 items-end">
          {product.productDiscount !== 0 && (
            <>
              <span className=" px-2 bg-red-1100 text-white-100 uppercase rounded-sm text-xs-em mb-1">
                {product.productDiscount}% discount
              </span>
              <span className=" text-gray-700 line-through opacity-75 text-xs">
                đ {parseMoneyVND(product.productPrice)}
              </span>
            </>
          )}
          <p className="text-red-1000 hover:text-red-1100 text-lg-em">
            đ{" "}
            {parseMoneyVND(
              priceDiscount(product.productPrice, product.productDiscount)
            )}
          </p>
        </div>
      </div>
      <div className="absolute bg-blue-700 text-white-100 p-3 top-0 right-0 rounded-bl-lg shadow-x1">
        <span>{product.productRating}</span>
      </div>
    </Link>
  );
};
export default React.memo(CardProductSimple);
