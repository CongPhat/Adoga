import { IProduct } from "@entities/Product";
import { Rate, Tooltip } from "antd";
import React from "react";
import { Tag } from "antd";
interface IProps {
  product: IProduct;
  loading?: boolean;
}
const ProductProperties = ({ product }: IProps) => {
  return (
    <div>
      <div className="p-2">
        <h1 className=" text-base font-bold">{product.name}</h1>
        <div className="flex items-center">
          <Rate value={product.star} className=" text-sm" />
          <span className=" text-blue-500 text-xs font-semibold">
            {product.street}
          </span>
        </div>
        <Tooltip placement="top" title={"text"}>
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
      </div>
    </div>
  );
};
export default React.memo(ProductProperties);
