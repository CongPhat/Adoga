import React from "react";
import HeaderProductPayment from "./components/HeaderProductPayment";
import FormRoomPayment from "./components/FormRoomPayment";
interface IRoomPayment {}

const RoomPayment = ({}: IRoomPayment) => {
  return (
    <div className="">
      <HeaderProductPayment />
      <FormRoomPayment />
    </div>
  );
};
export default React.memo(RoomPayment);
