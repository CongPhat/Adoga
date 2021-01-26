import RoomEntities from "@entities/Room";
import { spliceArray } from "@helper/functions";
import InfiniteScrollLazyLoad from "@components/commons/effect/InfiniteScrollLazyLoadComponent";
import { useRoomProduct } from "@view/Room/presenterRoom";
import React from "react";
const ItemRoomProduct = React.lazy(() => import("../ItemRoomProduct"));

interface IRoomsProduct {
  productId: string;
}
const RoomsProduct = ({ productId }: IRoomsProduct) => {
  const { presenter, data, effect } = useRoomProduct(productId);
  const { dataListRoom } = data;
  if (!dataListRoom) return null;

  return (
    <div>
      {spliceArray(dataListRoom, 0, 1).map((item, index) => (
        <ItemRoomProduct data={item} key={index} />
      ))}
      <InfiniteScrollLazyLoad delay={1}>
        {spliceArray(dataListRoom, 1, dataListRoom.length - 1).map(
          (item, index) => (
            <ItemRoomProduct data={item} key={index} />
          )
        )}
      </InfiniteScrollLazyLoad>
    </div>
  );
};
export default React.memo(RoomsProduct);
