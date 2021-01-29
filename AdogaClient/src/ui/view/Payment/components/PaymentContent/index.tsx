import React from "react";
import CustomerInformation from "../CustomerInformation";

const PaymentContent = () => {
  return (
    <div className="flex">
      {/* {!valuesFormContent.data ? (
        <PaymentInformation />
      ) : (
        <CustomerInformation />
      )} */}
      <CustomerInformation />
    </div>
  );
};
export default React.memo(PaymentContent);
