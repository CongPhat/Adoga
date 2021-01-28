import React from "react";
import { DatePicker, Space } from "antd";
const { RangePicker } = DatePicker;
import { Button, Form, Radio, Select } from "antd";
import { dateBooking } from "@view/Payment/store";
import { useSetRecoilState } from "recoil";
import { diffInDays } from "@helper/functions";
interface IFormCustomerNeed {}

const valuesArriving = [
  { value: 0, label: "I don't know" },
  { value: 1, label: "00:00 - 01:00" },
  { value: 2, label: "01:00 - 02:00" },
  { value: 3, label: "02:00 - 03:00" },
  { value: 4, label: "03:00 - 04:00" },
  { value: 5, label: "04:00 - 05:00" },
  { value: 6, label: "05:00 - 06:00" },
  { value: 7, label: "06:00 - 07:00" },
  { value: 8, label: "07:00 - 08:00" },
  { value: 9, label: "08:00 - 09:00" },
  { value: 10, label: "09:00 - 10:00" },
  { value: 11, label: "10:00 - 11:00" },
  { value: 12, label: "11:00 - 12:00" },
  { value: 13, label: "12:00 - 13:00" },
  { value: 14, label: "13:00 - 14:00" },
  { value: 15, label: "14:00 - 15:00" },
  { value: 16, label: "15:00 - 16:00" },
  { value: 17, label: "16:00 - 17:00" },
  { value: 18, label: "17:00 - 18:00" },
  { value: 19, label: "18:00 - 19:00" },
  { value: 20, label: "19:00 - 20:00" },
  { value: 21, label: "20:00 - 21:00" },
  { value: 22, label: "21:00 - 22:00" },
  { value: 23, label: "22:00 - 23:00" },
  { value: 24, label: "23:00 - 24:00" },
];

const FormCustomerNeed = ({}: IFormCustomerNeed) => {
  const setDateBooking = useSetRecoilState(dateBooking);
  const handleChangeDateBooking = (values, valuesString) => {
    const dateFrom = new Date(valuesString[0]);
    const dateTo = new Date(valuesString[1]);
    setDateBooking({
      dateBookingMoment: [dateFrom, dateTo],
      totalDate: diffInDays(dateFrom, dateTo),
    });
  };

  return (
    <div className="bg-white shadow-x1 p-4 mt-8">
      <p className="font-semibold text-base mb-2 text-red-1100">
        Let us know what date you will be staying
      </p>
      <span className="block mb-8 text-black">
        Your request will be processed by us immediately upon your booking.
      </span>
      <Form.Item name="date">
        <RangePicker
          className="w-3/4"
          format="ll"
          onChange={handleChangeDateBooking}
          clearIcon={false}
        />
      </Form.Item>

      <p className="font-semibold text-base mb-2">Let us know what you need</p>
      <span className="block mb-8 text-black">
        Requests are fulfilled on a first come, first served basis. We'll send
        yours right after you book.
      </span>
      <div className="bg-white-200 px-2 py-4">
        <p className="mb-2">Do you have a smoking preference?</p>
        <Form.Item name="smoking">
          <Radio.Group className="grid grid-cols-2">
            <Radio value={true}>Non-smoking</Radio>
            <Radio value={false}>Smoking</Radio>
          </Radio.Group>
        </Form.Item>

        <p className="mb-2">What bed configuration do you prefer?</p>
        <Form.Item name="beds">
          <Radio.Group className="grid grid-cols-2">
            <Radio value={true}>I'd like a large bed</Radio>
            <Radio value={false}>I'd like twin beds</Radio>
          </Radio.Group>
        </Form.Item>
      </div>

      <p className="font-semibold text-base mb-2 mt-4">
        Let us know when you are arriving
      </p>
      <span className="block mb-8 text-black">
        We'll let the property or host know when to expect you.
      </span>
      <div className="w-6/12">
        <Form.Item name="arriving" initialValue={0}>
          <Select>
            {valuesArriving.map((x, index) => (
              <Select.Option value={x.value} key={index}>
                {x.label}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      </div>
      <div className="flex justify-end mt-4">
        <Form.Item>
          <Button type="primary" htmlType="submit">
            NEXT PAGE
          </Button>
        </Form.Item>
      </div>
    </div>
  );
};
export default React.memo(FormCustomerNeed);
