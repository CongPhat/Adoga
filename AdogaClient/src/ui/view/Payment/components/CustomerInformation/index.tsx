import React, { useEffect } from "react";
import FormCustomerPayment from "./components/FormCustomerPayment";
import { Form } from "antd";
import moment from "moment";
import FormCustomerNeed from "./components/FormCustomerNeed";
import { useSetRecoilState } from "recoil";
import {
  dateBooking,
  IDataValuesBooking,
  valuesFormBooking,
} from "@view/Payment/store";
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
  const setDateBooking = useSetRecoilState(dateBooking);
  const setValuesFormBooking = useSetRecoilState(valuesFormBooking);

  useEffect(() => {
    const day = new Date();
    const nextDay = new Date(day);
    nextDay.setDate(day.getDate() + 1);
    const nextDay1 = new Date(day);
    nextDay1.setDate(day.getDate() + 2);
    form.setFieldsValue({
      date: [moment(nextDay), moment(nextDay1)],
    });
    setDateBooking({
      dateBookingMoment: [nextDay, nextDay1],
      totalDate: 1,
    });
  }, []);

  const onFinish = (values: any) => {
    setValuesFormBooking({
      data: values,
    });
  };
  return (
    <div className="w-full">
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
