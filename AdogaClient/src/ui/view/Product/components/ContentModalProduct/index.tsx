import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { modalImagesProduct } from "@view/Product/store";
import { Button, Modal, Rate, Tag } from "antd";
import { parseMoneyVND } from "@helper/functions";

interface IContentModalProduct {}
const ContentModalProduct = ({}: IContentModalProduct) => {
  const [modal] = useRecoilState(modalImagesProduct);
  const { dataProduct } = modal;
  if (!dataProduct) return null;
  return (
    <div className="w-full h-full p-4 bg-black text-white">
      <h6 className=" text-xl font-semibold text-white">
        {dataProduct.productName}
      </h6>
      <Rate value={dataProduct.productStar} disabled className=" text-base" />
      <p className=" text-xs text-white mt-2">{dataProduct.productStreet}</p>
      <p className="mt-4 mb-2 text-base">Starts from</p>
      {dataProduct.productDiscount !== 0 && (
        <Tag color="#f50">{dataProduct.productDiscount}% DISCOUNT</Tag>
      )}
      <p className=" line-through font-normal text-sm mt-4">
        {dataProduct.productDiscount == 0
          ? ""
          : `đ ${parseMoneyVND(dataProduct.productPrice)}`}
      </p>
      <p className=" leading-3">
        đ
        <span className="mr-1 text-3xl">
          {dataProduct.productDiscount != 0
            ? ` ${parseMoneyVND(
                (dataProduct.productPrice * dataProduct.productDiscount) / 100
              )}`
            : `${parseMoneyVND(dataProduct.productPrice)}`}
        </span>
        per night
      </p>
      <div className="text-center ">
        <Button className="mt-8 rounded-md w-56">See available rooms</Button>
      </div>
    </div>
  );
};
export default React.memo(ContentModalProduct);
