import RoomEntities from "@entities/Room";
import React from "react";

interface IItemRoomProduct {
  data: RoomEntities;
}
const ItemRoomProduct = ({ data }: IItemRoomProduct) => {
  return (
    <div>
      <div>
        <h6>{data.name}</h6>
        <span>{data.rating}</span>
      </div>
    </div>
  );
};
export default React.memo(ItemRoomProduct);
