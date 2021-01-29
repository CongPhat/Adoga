import React from "react";
import { SearchOutlined, UserOutlined } from "@ant-design/icons";
import { Form, Select, DatePicker, Button } from "antd";
import { faGlobeAsia } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const { RangePicker } = DatePicker;

const SearchMain = ({ dataLocation, form }) => {
  return (
    <div className={`z-60 w-full m-auto bg-blue-900 py-4`}>
      <div className={`flex justify-between w-3/5 m-auto items-center`}>
        <div className="w-6/12">
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
        </div>

        <div className=" w-4/12">
          <Form.Item name="room">
            <Select placeholder="Choose room" suffixIcon={<UserOutlined />}>
              <Select.Option value="solo">Solo</Select.Option>
              <Select.Option value="couple">Couple</Select.Option>
            </Select>
          </Form.Item>
        </div>
        <div className="">
          <Button className="" onClick={() => form.submit()}>
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};
export default React.memo(SearchMain);
