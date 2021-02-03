import { Empty } from "antd";
import { faHotel } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ReactComponentElement, ReactElement } from "react";
interface IProps {
  text?: string | ReactElement;
}
const EmptyComponent = ({ text = "No data" }: IProps) => {
  return (
    <Empty
      image={
        <FontAwesomeIcon icon={faHotel} className=" text-6xl text-gray-1100" />
      }
      description={<div className=" text-base">{text}</div>}
    />
  );
};
export default React.memo(EmptyComponent);
