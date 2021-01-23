import React from "react";
import { Rate, Tag } from "antd";
import BenefitEntities from "@entities/Benefits";
interface IHeaderBenefitProduct {
  benefits: Array<BenefitEntities>;
}
const HeaderBenefitProduct = ({ benefits }: IHeaderBenefitProduct) => {
  return (
    <>
      {benefits.map((item, index) => (
        <Tag
          color={`${index % 2 == 0 ? "#e12d2d" : "#32a923"}`}
          key={index}
          className="mt-2"
        >
          {item.name}
        </Tag>
      ))}
    </>
  );
};
export default React.memo(HeaderBenefitProduct);
