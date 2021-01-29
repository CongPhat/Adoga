import BillEntities from "@entities/Bill";
import React from "react";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IProps {
  dataBill: BillEntities;
}

const ItemBillConfirm = ({ children }) => {
  return (
    <li className="mt-4">
      <FontAwesomeIcon icon={faCheck} className=" text-green-600 mr-2" />
      {children}
    </li>
  );
};

const BillConfirm = ({ dataBill }: IProps) => {
  return (
    <div className="border border-gray-1100 shadow-x0 p-4 relative">
      <div className="absolute w-full h-1 bg-blue-600 top-0 left-0"></div>
      <p className="text-xl">
        Thank you {dataBill.fullName}. Your booking is now complete!
      </p>
      <ul>
        <ItemBillConfirm>
          <span>
            You chose to pay the property directly. Adoga will not charge your
            credit card.
          </span>
        </ItemBillConfirm>
        <ItemBillConfirm>
          <span>
            In the next 10 minutes you’ll receive an email containing your
            booking details and Entire apartment voucher/s.
          </span>
        </ItemBillConfirm>
        <ItemBillConfirm>
          <span>
            Your Booking ID is{" "}
            <strong className="text-blue-600">{dataBill.billId}</strong>
          </span>
        </ItemBillConfirm>
        <ItemBillConfirm>
          <span>
            In the next 10 minutes you will receive a booking confirmation with
            booking details in your inbox at{" "}
            <strong className="text-green-500">{dataBill.email}</strong>
          </span>
        </ItemBillConfirm>
        <ItemBillConfirm>
          <span>Please present this confirmation at check-in.</span>
        </ItemBillConfirm>
      </ul>
    </div>
  );
};
export default React.memo(BillConfirm);
