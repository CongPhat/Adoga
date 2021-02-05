import React from "react";
import "./style.scss";

interface IProps {}

const LoadingPrivateComponent = ({}: IProps) => {
  return (
    <div className="loading-effect fixed w-screen h-screen bg-black top-0 left-0 bg-opacity-25 flex justify-center items-center">
      <div className="bg-white-100 rounded-lg p-4 w-3/12 h-64 flex justify-center items-center">
        <h6 className="text-indigo-600 text-base uppercase font-semibold">
          Please wait a moment
        </h6>
      </div>
    </div>
  );
};
export default React.memo(LoadingPrivateComponent);
