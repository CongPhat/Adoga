import React from "react";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import EmptyComponent from "@components/commons/single/EmptyComponent";
import { Link } from "react-router-dom";
import { Button } from "antd";

const ErrorLocation = ({}) => {
  return (
    <div className="mt-8 text-center">
      <EmptyComponent
        text={
          <div className="flex flex-col">
            <span>An error has occurred. Please try again!</span>
            <span className="text-blue-600">
              Please contact us for our assistance.
            </span>
          </div>
        }
        icon={faExclamationCircle}
      />
      <div className="mt-8">
        <Link to="/">
          <Button>Back home</Button>
        </Link>
      </div>
    </div>
  );
};
export default React.memo(ErrorLocation);
