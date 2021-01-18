import { IProduct } from "@entities/Product";
import { Rate, Tooltip } from "antd";
import React from "react";
import { Tag } from "antd";
import BenefitEntities from "@entities/Benefits";
import { faUser, faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
interface IProps {
  product: IProduct;
  loading?: boolean;
}

interface IOverviewTag {
  listTag: BenefitEntities[];
  title: string;
}
const OverviewTag = ({ listTag, title }: IOverviewTag) => {
  return (
    <div className="min-w-px-500">
      <h6 className="text-white">{title}</h6>
      <div className="grid grid-cols-2 gap-1 p-2">
        {listTag.map((x, y) => (
          <span key={y} className="text-xs">
            {x.name}
          </span>
        ))}
      </div>
    </div>
  );
};

const ProductProperties = ({ product }: IProps) => {
  return (
    <div className="flex h-full">
      <div className="p-2 w-2/3">
        <h1 className=" text-base font-bold">{product.name}</h1>
        <div className="flex items-center">
          <Rate value={product.star} className=" text-sm" />
          <span className=" text-blue-500 text-xs font-semibold">
            {product.street}
          </span>
        </div>
        <Tooltip
          placement="top"
          title={
            <OverviewTag
              listTag={product.benefits}
              title="Available room benefits"
            />
          }
        >
          <div className="mt-2">
            {product.benefits.map((item, index) => {
              if (index > 2) return null;
              return (
                <Tag color="red" key={index} className="font-semibold">
                  {item.name}
                </Tag>
              );
            })}
            {product.benefits.length > 2 && (
              <Tag color="red" className="font-semibold">
                +{product.benefits.length - 2}
              </Tag>
            )}
          </div>
        </Tooltip>
        <div className="mt-8">
          <span className="block text-black text-xs mb-2">
            <FontAwesomeIcon icon={faUser} /> Recommended by 91% of guests
          </span>
          <span className="block text-black text-xs">
            <FontAwesomeIcon icon={faCreditCard} /> Book without a credit card
          </span>
        </div>
      </div>
      <div className="w-1/3 py-2 flex flex-col justify-between items-end">
        <div className="flex justify-end items-center pr-2">
          <span className="text-black">Excellent</span>
          <span className="p-3 bg-blue-600 text-white rounded-md ml-2">
            {product.rating}
          </span>
        </div>
        <div className=" text-right pr-2">
          {product.only !== 0 && (
            <Tag className=" bg-red-1100 m-0 text-white rounded transform translate-x-3">
              ONLY {product.only} LEFT
            </Tag>
          )}
          {product.discount !== 0 && (
            <Tag className=" bg-pink-1100 m-0 text-red-1200 rounded transform translate-x-3 mt-2">
              {product.discount}% DISCOUNT
            </Tag>
          )}
          <div>
            <span className="text-xs text-gray-1200">
              Price per night as low as
            </span>
          </div>
          <div>
            {product.discount !== 0 && (
              <span className="text-2xl relative">
                {product.price}
                <span
                  className="absolute w-full h-2px bg-red-1100 left-0 top-1/2"
                  style={{ transform: "skew(46deg, 160deg)" }}
                ></span>
              </span>
            )}
            <span className="block leading-3">
              <span className="underline text-2xl">đ</span>
              <span className=" text-2xl text-red-1100">
                {(product.price * product.discount) / 100}
              </span>
            </span>
            <span className=" text-green-600 text-sm">FREE CANCELLATION</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default React.memo(ProductProperties);
