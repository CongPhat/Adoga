import React, { useEffect } from "react";
import HeaderProductPayment from "./components/HeaderProductPayment";
import FormRoomPayment from "./components/FormRoomPayment";
import { useSingleAsync } from "@hook/useAsync";
import { useParams } from "react-router";
import RoomEntities from "@entities/Room";
import RoomRepositoryImpl from "@useCases/Room";
import { useRecoilValue } from "recoil";
import { dateBooking } from "@view/Payment/store";
import CardRoomPayment from "@components/commons/feature/CardRoomPayment";
interface IRoomPayment {}

const RoomPayment = ({}: IRoomPayment) => {
  const params: any = useParams();
  const asyncGetDetailRoom = useSingleAsync<RoomEntities>(
    new RoomRepositoryImpl().GetDetailRoom
  );
  const dateBookingPayment = useRecoilValue(dateBooking);

  useEffect(() => {
    asyncGetDetailRoom.execute(params.roomId);
  }, []);

  if (!asyncGetDetailRoom.value) return null;
  const dataRoom = asyncGetDetailRoom.value;

  return (
    <div className="">
      <HeaderProductPayment />
      <CardRoomPayment
        room={dataRoom}
        roomTotal={params.roomTotal}
        dateBookingPayment={dateBookingPayment}
      />
    </div>
  );
};
export default React.memo(RoomPayment);
