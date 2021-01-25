import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { modalImagesProduct } from "@view/Product/store";
import { Button, Modal, Rate, Tag } from "antd";
import { parseMoneyVND } from "@helper/functions";
import FacilitiesEntities from "@entities/Room/facilities";
import AmenitiesEntities from "@entities/Room/Amenities";

interface IItemFacilities {
  facilities: FacilitiesEntities;
}
interface IItemAmenities {
  amenities: AmenitiesEntities;
}

const ItemAmenities = ({ amenities }: IItemAmenities) => {
  return (
    <li className="text-xs">
      <i className={`${amenities.icon}`}></i>
      <span className="ml-2 text-grey-300">{amenities.name}</span>
    </li>
  );
};

const ItemFacilities = ({ facilities }: IItemFacilities) => {
  return (
    <div className="mb-4">
      <p className="text-grey-300 font-semibold text-sm">{facilities.name}</p>
      <ul className="grid grid-cols-2 gap-2 mt-1">
        {facilities.amenities.map((item, index) => (
          <ItemAmenities amenities={item} key={index} />
        ))}
      </ul>
    </div>
  );
};

const ContentModalRoom = ({}) => {
  const [modal] = useRecoilState(modalImagesProduct);
  const { dataRoom } = modal;

  if (!dataRoom) return null;
  return (
    <div className="w-full h-full bg-white py-2">
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
                {dataRoom.discount != 0
                  ? ` ${parseMoneyVND(
                      (dataRoom.price * dataRoom.discount) / 100
                    )}`
                  : `${parseMoneyVND(dataRoom.price)}`}
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
