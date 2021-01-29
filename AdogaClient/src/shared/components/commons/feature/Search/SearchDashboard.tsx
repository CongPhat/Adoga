import React from "react";
import { SearchOutlined, UserOutlined } from "@ant-design/icons";
import { Form, Select, DatePicker, Button } from "antd";
import { faGlobeAsia } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const { RangePicker } = DatePicker;

const SearchDashboard = ({ dataLocation, form }) => {
  return (
    <div
      className={` absolute left-1/2 z-60 w-3/5 transform -translate-x-1/2 shadow-x1 m-auto p-12 rounded-xl bg-white-100`}
      style={{ top: "290px" }}
    >
      <div className={`grid grid-cols-1`}>
        <Form.Item
          name="location"
          rules={[{ required: true, message: "Please choose city" }]}
        >
          <Select placeholder="Choose city" suffixIcon={<SearchOutlined />}>
            {dataLocation?.map((x, index) => (
              <Select.Option value={x.id} key={index}>
                <FontAwesomeIcon
                  icon={faGlobeAsia}
                  className="mr-2 text-green-600 text-xl"
                />
                {x.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <div className="grid grid-cols-1 gap-4">
          <Form.Item name="room">
            <Select placeholder="Choose room" suffixIcon={<UserOutlined />}>
              <Select.Option value="solo">Solo</Select.Option>
              <Select.Option value="couple">Couple</Select.Option>
            </Select>
          </Form.Item>
        </div>
      </div>
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
export default React.memo(SearchDashboard);
