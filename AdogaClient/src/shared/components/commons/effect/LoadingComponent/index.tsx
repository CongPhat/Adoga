import React from "react";
import "./style.scss";

interface IProps {}

const LoadingComponent = ({}: IProps) => {
  return (
    <div className="loading-effect">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};
export default React.memo(LoadingComponent);
