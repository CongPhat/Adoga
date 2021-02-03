import { Empty, Skeleton } from "antd";
import { title } from "process";
import "./style.scss";
import React from "react";
interface IProps {}
const EffectImageComponent = ({}: IProps) => {
  return (
    <div className="card-skeleton">
      <div className="animated-background">
        <div className="skel-mask-container"></div>
      </div>
    </div>
  );
};
export default React.memo(EffectImageComponent);
