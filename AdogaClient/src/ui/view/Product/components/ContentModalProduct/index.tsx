import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { modalImagesProduct } from "@view/Product/store";
import { Button, Modal, Rate, Tag } from "antd";
import { parseMoneyVND } from "@helper/functions";

interface IContentModalProduct {}
const ContentModalProduct = ({}: IContentModalProduct) => {
  const [modal] = useRecoilState(modalImagesProduct);
  const { data } = modal;
  if (!data) return null;
  return (
    <div className="w-full h-full p-4 bg-black text-white">
      <h6 className=" text-xl font-semibold text-white">{data.name}</h6>
      <Rate value={data.star} disabled className=" text-base" />
      <p className=" text-xs text-white mt-2">{data.street}</p>
      <p className="mt-4 mb-2 text-base">Starts from</p>
      {data.discount !== 0 && <Tag color="#f50">{data.discount}% DISCOUNT</Tag>}
      <p className=" line-through font-normal text-sm mt-4">
        {data.discount == 0 ? "" : `đ ${parseMoneyVND(data.price)}`}
      </p>
      <p className=" leading-3">
        đ
        <span className="mr-1 text-3xl">
          {data.discount != 0
            ? ` ${parseMoneyVND((data.price * data.discount) / 100)}`
            : `${parseMoneyVND(data.price)}`}
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
