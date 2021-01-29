import React from "react";
import RoomEntities from "@entities/Room";
import RatingComponent from "@components/commons/single/RatingComponent";
import { faUsers, faCheck } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { parseMoneyVND, priceDiscount } from "@helper/functions";
import { Tag } from "antd";
import { IDateBooking } from "@view/Payment/store";

interface IFormRoomPayment {
  room: RoomEntities;
  roomTotal: string;
  dateBookingPayment: IDateBooking;
}
interface ITextPrice {
  text: string;
  price: string | number;
  classText?: string;
  classPrice?: string;
}
const TextPrice = ({
  text,
  price,
  classText = "",
  classPrice = "",
}: ITextPrice) => {
  return (
    <li className="mt-2 flex justify-between">
      <span className={`w-1/2 block ${classText}`}>{text}</span>
      <span className={`w-1/2 block text-right ${classPrice}`}>{price}</span>
    </li>
  );
};

const CardRoomPayment = ({
  room,
  roomTotal,
  dateBookingPayment,
}: IFormRoomPayment) => {
  return (
    <div>
      <div className="bg-white p-4 mt-4 shadow-x0 border border-gray-1100 relative">
        <div className="flex justify-between items-center pb-4">
          <p className="font-semibold text-xs-1">
            <span className="mr-1">
              {moment(dateBookingPayment?.dateBookingMoment[0]).format("ll")}
            </span>
            -
            <span className="ml-1">
              {moment(dateBookingPayment?.dateBookingMoment[1]).format("ll")}
            </span>
          </p>
          <p className="text-black">{dateBookingPayment?.totalDate} night</p>
        </div>
        <div className="flex justify-between items-center border-b border-gray-1100 pb-6">
          <p className="font-semibold text-xs-1">
            {roomTotal} x {room.name}
          </p>
          <RatingComponent
            rating={room.rating}
            classText="text-blue-600 font-semibold text-xs"
          />
        </div>
        <div className="mt-2">
          <ul className="text-xs-1">
            <li className="mb-2">
              <FontAwesomeIcon icon={faUsers} className="mr-2" />
              <span>{room.people} peoples</span>
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCheck}
                className=" text-green-600 mr-2"
              />
              <span>
                {room.benefitsRoom.reduce(
                  (string, item, index) =>
                    `${
                      index == 0 ? `${item.name}` : `${string},  ${item.name}`
                    }`,
                  ""
                )}
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-white p-4 mt-4 shadow-x0 border border-gray-1100 relative">
        {room.discount && (
          <div className="flex justify-end transform  translate-x-8">
            <Tag color="red">{room.discount}% DISCOUNT</Tag>
          </div>
        )}
        <ul className=" text-xs-1" style={{ letterSpacing: "0.6px" }}>
          <TextPrice
            text={`Original price(${roomTotal} room x ${dateBookingPayment.totalDate} night)`}
            price={`đ ${parseMoneyVND(
              room.price * dateBookingPayment.totalDate
            )}`}
            classPrice="line-through"
          />

          {room.discount !== 0 && (
            <TextPrice
              text={`Price discount(${roomTotal} room x ${dateBookingPayment.totalDate} night)`}
              price={`đ ${parseMoneyVND(
                priceDiscount(room.price, room.discount) *
                  dateBookingPayment.totalDate *
                  parseInt(roomTotal)
              )}`}
            />
          )}
          <TextPrice
            text="Booking fees"
            price={`FREE`}
            classPrice="text-blue-600"
          />
          <div className="border-b border-gray-1100 w-full h-px mt-4"></div>
          <TextPrice
            text="Price"
            price={`đ ${parseMoneyVND(
              priceDiscount(room.price, room.discount) *
                dateBookingPayment.totalDate *
                parseInt(roomTotal)
            )}`}
            classText=" font-semibold"
            classPrice=" font-semibold"
          />
        </ul>
      </div>
    </div>
  );
};
export default React.memo(CardRoomPayment);
