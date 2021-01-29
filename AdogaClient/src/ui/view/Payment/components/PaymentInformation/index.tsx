import BillEntities from "@entities/Bill";
import { useSingleAsync } from "@hook/useAsync";
import BillRepositoryImpl from "@useCases/Bill";
import { Form } from "antd";
import React, { useEffect } from "react";
import { useHistory } from "react-router";

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const PaymentInformation = () => {
  const history = useHistory();
  console.log(history.location.search, "historyhistory");

  const asyncGetDetailBill = useSingleAsync<BillEntities>(
    new BillRepositoryImpl().GetDetail
  );

  useEffect(() => {
    // asyncGetDetailBill.execute(params.roomId);
  }, []);
  useEffect(() => {}, []);
  return (
    <div>
      <div>
        <p></p>
      </div>
    </div>
  );
};
export default React.memo(PaymentInformation);
