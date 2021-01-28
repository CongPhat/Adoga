import { valuesFormBooking } from "@view/Payment/store";
import React from "react";
import { useRecoilValue } from "recoil";
import CustomerInformation from "../CustomerInformation";
import PaymentInformation from "../PaymentInformation";

const PaymentContent = () => {
  const valuesFormContent = useRecoilValue(valuesFormBooking);
  return (
    <div className="flex">
      {valuesFormContent.data ? (
        <PaymentInformation />
      ) : (
        <CustomerInformation />
      )}
    </div>
  );
};
export default React.memo(PaymentContent);
