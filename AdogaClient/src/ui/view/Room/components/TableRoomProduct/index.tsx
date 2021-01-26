import PriceDiscountComponent from "@components/commons/single/PriceDiscountComponent";
import RoomEntities from "@entities/Room";
import { Button, InputNumber, Select, Table, Tag } from "antd";
import { faCheck, faMale } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./style.scss";

interface ITableRoomProduct {
  data: RoomEntities;
}

interface IItemBenefitTable {
  text: RoomEntities;
}

const ItemBenefitTable = ({ text }: IItemBenefitTable) => {
  return (
    <li className=" text-xs-1 mb-2">
      <FontAwesomeIcon icon={faCheck} className=" mr-2 text-green-600" />
      <span>{text}</span>
    </li>
  );
};

const TableRoomProduct = ({ data }: ITableRoomProduct) => {
  function handleChange(value) {
    console.log("changed", value);
  }

  const columns = [
    {
      title: "Benefit",
      dataIndex: "benefitsRoom",
      key: "benefitsRoom",
      width: "50%",
      render: (item) => {
        return (
          <ul>
            {item.map((itemBenefit, index) => (
              <ItemBenefitTable text={itemBenefit.name} key={index} />
            ))}
          </ul>
        );
      },
    },
    {
      title: "Sleeps",
      dataIndex: "people",
      key: "people",
      width: "5%",
      render: (item) => {
        const arrPeople = Array.from(Array(item).keys());
        return (
          <ul className="grid grid-cols-2 gap-1">
            {arrPeople.map((x, index) => {
              return (
                <li key={index}>
                  <FontAwesomeIcon
                    icon={faMale}
                    className=" text-2xl text-gray-1200"
                  />
                </li>
              );
            })}
          </ul>
        );
      },
    },
    {
      title: "Price per night",
      dataIndex: "discount",
      key: "discount",
      width: "25%",
      render: (item, row) => {
        return (
          <div>
            {row.discount !== 0 && (
              <Tag className=" bg-pink-1100 m-0 text-red-1200 rounded mb-4">
                {row.discount}% DISCOUNT
              </Tag>
            )}
            <div className=" text-right">
              <PriceDiscountComponent
                discount={row.discount || 0}
                price={row.price || 0}
                classTextDiscount="text-gray-1200"
              />
              <span className="text-xs text-gray-1200">
                Price per night as low as
              </span>
            </div>
          </div>
        );
      },
    },
    {
      title: "Rooms",
      dataIndex: "rooms",
      key: "rooms",
      width: "5%",
      render: () => {
        return (
          <Select
            defaultValue={0}
            onChange={handleChange}
            style={{ width: "70px" }}
          >
            {Array.from(Array(11).keys()).map((item, index) => (
              <Select.Option value={item} key={index}>
                {item}
              </Select.Option>
            ))}
          </Select>
        );
      },
    },
    {
      title: "Most booked",
      dataIndex: "Mostbooked",
      key: "Mostbooked",
      width: "5%",
      render: () => {
        return <Button>Book now</Button>;
      },
    },
  ];

  return (
    <>
      <Table
        columns={columns}
        dataSource={[data]}
        className="w-full table-room-product"
        pagination={false}
      />
    </>
  );
};
export default React.memo(TableRoomProduct);
