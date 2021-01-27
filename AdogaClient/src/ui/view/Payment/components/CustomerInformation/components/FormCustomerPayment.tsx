import React, { useEffect } from "react";
import RoomEntities from "@entities/Room";
import { useSingleAsync } from "@hook/useAsync";
import ProductEntities from "@entities/Product";
import ProductRepositoryImpl from "@useCases/Product";
import CardProductSimple from "@components/commons/feature/CardProductSimple";
import { Form, Input, Select } from "antd";
interface IRoomLowestPrice {}

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

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

const FormCustomerPayment = ({}: IRoomLowestPrice) => {
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    console.log(values);
  };
  return (
    <div className="bg-white shadow-x1 p-4">
      <p className="font-semibold mb-8 text-base">Let us know who you are</p>
      <Form.Item name="name" label="Full name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item
        name="email"
        label="Email"
        rules={[{ type: "email" }, { required: true }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="retypeEmail"
        label="Retype email"
        rules={[
          { type: "email" },
          { required: true },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("email") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                "Please make sure the “Email” and “Retype email” fields match."
              );
            },
          }),
        ]}
      >
        <Input />
      </Form.Item>

      <div className="grid grid-cols-2 gap-4">
        <Form.Item
          name="phoneNumber"
          label="Phone number (optional)"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="region"
          label="Country/region of residence"
          rules={[{ required: true }]}
        >
          <Select placeholder="Please choose country/region">
            <Select.Option value="VN">Vietnam</Select.Option>
          </Select>
        </Form.Item>
      </div>
    </div>
  );
};
export default React.memo(FormCustomerPayment);
