import React from "react";
import {
  SearchOutlined,
  UserOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import { Form, Select, DatePicker, Button } from "antd";
import { useForm } from "antd/lib/form/Form";
const { RangePicker } = DatePicker;

const SearchComponent = ({}) => {
  const [form] = useForm();
  const handleFinishSearch = (values) => {
    console.log(values, "values");
  };
  return (
    <div className="shadow-x1 m-auto p-12 rounded-xl relative bg-white-100">
      <Form className="form-search" form={form} onFinish={handleFinishSearch}>
        <Form.Item name="city">
          <Select placeholder="Choose city" suffixIcon={<SearchOutlined />}>
            <Select.Option value="jack">Ho Chi Minh City</Select.Option>
            <Select.Option value="jack1">Ha Noi City</Select.Option>
          </Select>
        </Form.Item>
        <div className="grid grid-cols-2 gap-4">
          <Form.Item name="date" className="">
            <RangePicker suffixIcon={<CalendarOutlined />} />
          </Form.Item>
          <Form.Item name="room">
            <Select placeholder="Choose room" suffixIcon={<UserOutlined />}>
              <Select.Option value="solo">Solo</Select.Option>
              <Select.Option value="couple">Couple</Select.Option>
            </Select>
          </Form.Item>
        </div>
      </Form>
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bg-white-100"
        style={{ bottom: "-35px" }}
      >
        <Button
          className="text-lg uppercase min-w-px-500 pt-5 pb-5"
          onClick={() => form.submit()}
        >
          Search
        </Button>
      </div>
    </div>
  );
};
export default React.memo(SearchComponent);
