import RatingComponent from "@components/commons/single/RatingComponent";
import RoomEntities from "@entities/Room";
import AmenitiesEntities from "@entities/Room/Amenities";
import { modalImagesProduct } from "@view/Product/store";
import React from "react";
import { useSetRecoilState } from "recoil";
import TableRoomProduct from "../TableRoomProduct";

interface IItemRoomProduct {
  data: RoomEntities;
}
interface IItemAmenitiesImportant {
  icon: string;
  text: string;
  className?: string;
  colorText?: string;
}

export const ItemAmenitiesImportant = ({
  icon,
  text,
  className = "",
  colorText = "",
}: IItemAmenitiesImportant) => {
  return (
    <li className={`${className} flex items-center mb-2`}>
      <i
        className={`${icon} ${colorText} text-gray-1200`}
        style={{ width: "15px" }}
      ></i>
      <span className={`inline-block ml-2 text-sm ${colorText} text-gray-800`}>
        {text}
      </span>
    </li>
  );
};

const ItemRoomProduct = ({ data }: IItemRoomProduct) => {
  const { images, amenitiesImportant, size, beds } = data;
  const setModal = useSetRecoilState(modalImagesProduct);
  const handleShowRoom = () => {
    setModal({
      dataProduct: null,
      dataRoom: data,
      type: "room",
      isShow: true,
    });
  };

  return (
    <div className="p-4 border border-gray-1100 mb-8 bg-white-200">
      <div className="flex justify-between mb-4 items-center">
        <h6 className="font-semibold text-base">{data.name}</h6>
        <RatingComponent rating={data.rating} isRevert />
      </div>
      <div className="flex">
        <div className=" w-1/5">
          <div onClick={handleShowRoom} className="cursor-pointer">
            {images && (
              <div>
                {images.length >= 1 && (
                  <div className="mb-1 h-120">
                    <img src={images[0].linkImage} alt={images[0].title} />
                  </div>
                )}
                <div
                  className={`grid grid-cols-${
                    images.length == 3 ? "2" : "1"
                  } gap-1 h-60`}
                >
                  {images.length >= 2 && (
                    <div>
                      <img src={images[1].linkImage} alt={images[1].title} />
                    </div>
                  )}
                  {images.length >= 3 && (
                    <div>
                      <img src={images[2].linkImage} alt={images[2].title} />
                    </div>
                  )}
                </div>
              </div>
            )}
            <span className="mt-3 block mb-4 text-blue-600 cursor-pointer hover:underline">
              Room photos and details
            </span>
          </div>
          <div className="amenitiesImportant">
            <ul>
              <ItemAmenitiesImportant
                icon="icon-wifi"
                text={`Free Wi-Fi`}
                colorText="text-green-500"
              />
              <ItemAmenitiesImportant
                icon="icon-beds"
                text={`${beds} single beds`}
              />
              <ItemAmenitiesImportant
                icon="icon-size"
                text={`Room size: ${size}`}
              />
              {amenitiesImportant.map((item, index) => (
                <ItemAmenitiesImportant
                  icon={item.icon}
                  text={`${item.name}`}
                  key={index}
                />
              ))}
            </ul>
            <span className="text-blue-600 cursor-pointer block ml-6">
              See all room facilities
            </span>
          </div>
        </div>
        <div className="w-4/5">
          <TableRoomProduct data={data} />
        </div>
      </div>
    </div>
  );
};
export default React.memo(ItemRoomProduct);
