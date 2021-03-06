import React, { useEffect } from "react";
import RoomEntities from "@entities/Room";
import { Button, Tag } from "antd";
import { faUsers, faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  checkEffectData,
  createArrayImageSkeleton,
  parseMoneyVND,
} from "@helper/functions";
import { useSetRecoilState } from "recoil";
import { modalImagesProduct } from "@view/Product/store";
import { useSingleAsync } from "@hook/useAsync";
import RoomRepositoryImpl from "@useCases/Room";
import LoadingImageComponent from "@components/commons/single/LoadingImageComponent";
import EffectImageComponent from "@components/commons/single/EffectImageComponent";
import SkeletonComponent from "@components/commons/single/SkeletonComponent";
interface IRoomLowestPrice {
  productId: string;
}

const RoomLowestPrice = ({ productId }: IRoomLowestPrice) => {
  const asyncGetRoomLowest = useSingleAsync<RoomEntities>(
    new RoomRepositoryImpl().GetRoomLowest,
    {
      initialData: new RoomEntities({
        images: createArrayImageSkeleton(1),
      }),
    }
  );

  useEffect(() => {
    asyncGetRoomLowest.execute(productId);
  }, [productId]);

  const setModal = useSetRecoilState(modalImagesProduct);
  const handleShowImagesProduct = () => {
    setModal({
      dataProduct: null,
      dataRoom: room,
      type: "room",
      isShow: true,
    });
  };

  const { status, value, error } = asyncGetRoomLowest;
  const room = asyncGetRoomLowest.value;

  const loading = status == "loading";

  return (
    <div className="overflow-hidden rounded-md rounded-b-none">
      <p className="bg-orange-600 text-white-100 px-2 py-1">
        Our lowest oruce offer
      </p>
      <div className="border border-red-1100 border-t-0 overflow-hidden rounded-md rounded-t-none">
        <div
          className="w-full h-120 cursor-pointer"
          onClick={handleShowImagesProduct}
        >
          {loading ? (
            <EffectImageComponent />
          ) : (
            <img
              src={room.images[0].linkImage}
              alt={room.images[0].title}
              className="object-cover"
            />
          )}
        </div>
        <div className="p-4">
          {loading ? (
            <SkeletonComponent loading={loading} rowsSkeleton={2} />
          ) : (
            <>
              <h6 className="text-black">{room.name}</h6>
              <div className="text-xs">
                <FontAwesomeIcon icon={faUsers} className="mr-1" />
                {room.people} adult
              </div>
              <p
                className="cursor-pointer text-blue-500 my-2 hover:underline"
                onClick={handleShowImagesProduct}
              >
                View more room details
              </p>
            </>
          )}

          {loading ? (
            <SkeletonComponent loading={loading} rowsSkeleton={2} reverse />
          ) : (
            <>
              {room.discount !== 0 && (
                <div className="flex items-center">
                  <span className=" w-full h-px bg-gray-1200 opacity-50"></span>
                  <Tag color="rgb(225, 45, 45)" className="m-0">
                    {room.discount}% DISCOUNT
                  </Tag>
                </div>
              )}
              <div className="flex items-end flex-col">
                <p className=" line-through font-normal text-sm mt-4">
                  {room.discount == 0 ? "" : `đ ${parseMoneyVND(room.price)}`}
                </p>
                <p className=" ">
                  đ
                  <span className="mr-1 text-red-1100 font-bold text-base">
                    {room.discount != 0
                      ? `${parseMoneyVND((room.price * room.discount) / 100)}`
                      : `${parseMoneyVND(room.price)}`}
                  </span>
                </p>
              </div>
            </>
          )}

          <div className="text-center ">
            <Button className="mt-8 rounded-md w-56" loading={loading}>
              {loading ? "" : "Book now"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default React.memo(RoomLowestPrice);
