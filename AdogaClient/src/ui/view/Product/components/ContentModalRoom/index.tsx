import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { modalImagesProduct } from "@view/Product/store";
import { Button, Modal, Rate, Tag } from "antd";
import { parseMoneyVND, priceDiscount } from "@helper/functions";
import ItemFacilities from "@components/commons/feature/Facilities/ItemFacilities";

const ContentModalRoom = ({}) => {
  const [modal] = useRecoilState(modalImagesProduct);
  const { dataRoom } = modal;

  if (!dataRoom) return null;
  return (
    <div className="w-full h-full bg-white-100 py-2">
      <div className="shadow p-4">
        <div className="flex justify-between items-center">
          <div>
            <h6 className="text-base font-semibold ">{dataRoom.name}</h6>
            <p className="text-xs text-gray-1200">Starts from</p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <p className=" line-through font-normal text-sm mt-4 text-gray-1200 opacity-75">
              {dataRoom.discount == 0
                ? ""
                : `đ ${parseMoneyVND(dataRoom.price)}`}
            </p>
            <p className="text-base">
              đ
              <span className="text-2xl text-red-1100 font-semibold ">
                {parseMoneyVND(
                  priceDiscount(dataRoom.price, dataRoom.discount)
                )}
              </span>
            </p>
          </div>
          {dataRoom.discount !== 0 && (
            <Tag color="#e12d2d" className="h-6 transform translate-x-6">
              {dataRoom.discount}% DISCOUNT
            </Tag>
          )}
        </div>
      </div>
      <div className="p-4 overflow-scroll h-full">
        {dataRoom.facilities.map((item, index) => (
          <ItemFacilities facilities={item} key={index} />
        ))}
      </div>
    </div>
  );
};
export default React.memo(ContentModalRoom);
