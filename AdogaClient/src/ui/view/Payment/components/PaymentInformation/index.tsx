import { Form } from "antd";
import React from "react";

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
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    // setValuesFormBooking({
    //   data: values,
    // });
  };
  return (
    <div className="flex">
      <Form
        onFinish={onFinish}
        validateMessages={validateMessages}
        form={form}
      ></Form>
    </div>
  );
};
export default React.memo(PaymentInformation);
