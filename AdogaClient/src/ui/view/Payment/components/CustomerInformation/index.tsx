import React, { useEffect } from "react";
import RoomEntities from "@entities/Room";
import { useSingleAsync } from "@hook/useAsync";
import ProductEntities from "@entities/Product";
import ProductRepositoryImpl from "@useCases/Product";
import CardProductSimple from "@components/commons/feature/CardProductSimple";
import FormCustomerPayment from "./components/FormCustomerPayment";
import { Form, Input, Select } from "antd";
import FormCustomerNeed from "./components/FormCustomerNeed";
interface IRoomLowestPrice {}
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
const CustomerInformation = ({}: IRoomLowestPrice) => {
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    console.log(values);
  };
  return (
    <div className="">
      <Form
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
        form={form}
      >
        <FormCustomerPayment />
        <FormCustomerNeed />
      </Form>
    </div>
  );
};
export default React.memo(CustomerInformation);
