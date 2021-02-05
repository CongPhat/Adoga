import EffectImageComponent from "@components/commons/single/EffectImageComponent";
import LoadingImageComponent from "@components/commons/single/LoadingImageComponent";
import LoadingParagraphComponent from "@components/commons/single/LoadingParagraphComponent";
import { IProduct } from "@entities/Product";
import { parseMoneyVND } from "@helper/functions";
import { Rate } from "antd";
import React from "react";
import { Link } from "react-router-dom";
interface IProps {
  product: IProduct;
  loading?: boolean;
}
const CardProduct = ({ product, loading = true }: IProps) => {
  return (
    <Link
      className="card-product relative block"
      to={`/product/${product?.productId}`}
    >
      <div style={{ height: "200px" }}>
        {loading ? (
          <EffectImageComponent />
        ) : (
          <img
            src={product.productImageThumbnail}
            alt={product.productName}
            className="w-full h-full object-cover"
          />
        )}
      </div>
      <div>
        <h1 className=" text-sm font-semibold mt-2 mb-1">
          {loading ? (
            <LoadingParagraphComponent row={2} />
          ) : (
            product?.productName
          )}
        </h1>
        {!loading && (
          <>
            <Rate value={product?.productStar} disabled className=" text-sm" />
            <>
              <p className="text-blue-600 text-xs">{product?.productStreet}</p>
              <p className="text-red-1100 hover:text-red-1100 text-lg">
                đ {parseMoneyVND(product?.productPrice)}
              </p>
            </>
          </>
        )}
      </div>
      {!loading && (
        <div className="absolute bg-blue-700 text-white-100 p-3 top-0 right-0 rounded-bl-lg shadow-x1">
          <span>{product?.productRating}</span>
        </div>
      )}
    </Link>
  );
};
export default React.memo(CardProduct);
