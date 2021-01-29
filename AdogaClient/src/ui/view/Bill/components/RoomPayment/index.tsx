import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { detailBill } from "@view/Bill/store";
import { spliceDate, diffInDays } from "@helper/functions";
import CardRoomPayment from "@components/commons/feature/CardRoomPayment";
interface IRoomPayment {}

const RoomPayment = ({}: IRoomPayment) => {
  const detailBillContent = useRecoilValue(detailBill);
  if (!detailBillContent.data) return null;
  const { data } = detailBillContent;
  const dateFromSplit = spliceDate(data.dateFrom);
  const dateToSplit = spliceDate(data.dateTo);
  const dateFrom = new Date(
    dateFromSplit[2],
    dateFromSplit[1],
    dateFromSplit[0]
  );
  const dateTo = new Date(dateToSplit[2], dateToSplit[1], dateToSplit[0]);

  return (
    <div className="">
      <CardRoomPayment
        room={data?.room}
        roomTotal={data?.totalRoom.toString()}
        dateBookingPayment={{
          dateBookingMoment: [dateFrom, dateTo],
          totalDate: diffInDays(dateFrom, dateTo),
        }}
      />
    </div>
  );
};
export default React.memo(RoomPayment);
