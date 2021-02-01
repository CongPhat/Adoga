import React from "react";
import BillContent from "./components/BillContent";
import RoomPayment from "./components/RoomPayment";

const Bill = () => {
  return (
    <section className="flex py-8">
      <div className="w-8/12 mr-4">
        <BillContent />
      </div>
      <div className="w-4/12">
        <RoomPayment />
      </div>
    </section>
  );
};
export default React.memo(Bill);
