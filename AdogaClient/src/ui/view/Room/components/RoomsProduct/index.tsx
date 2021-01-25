import RoomEntities from "@entities/Room";
import { useRoomProduct } from "@view/Room/presenterRoom";
import React from "react";
import ItemRoomProduct from "../ItemRoomProduct";

interface IRoomsProduct {
  productId: string;
}
const RoomsProduct = ({ productId }: IRoomsProduct) => {
  const { presenter, data, effect } = useRoomProduct(productId);
  const { dataListRoom } = data;
  if (!dataListRoom) return null;

  return (
    <div>
      {dataListRoom.map((item: RoomEntities, index: number) => (
        <ItemRoomProduct data={item} key={index} />
      ))}
    </div>
  );
};
export default React.memo(RoomsProduct);
