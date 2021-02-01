import React from "react";
import PaymentContent from "./components/PaymentContent";
import RoomPayment from "./components/RoomPayment";

const Payment = () => {
  return (
    <section className="flex py-8">
      <div className="w-8/12 mr-4">
        <PaymentContent />
      </div>
      <div className="w-4/12">
        <RoomPayment />
      </div>
    </section>
  );
};
export default React.memo(Payment);
