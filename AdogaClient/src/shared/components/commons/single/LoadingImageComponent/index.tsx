import { Empty, Skeleton } from "antd";
import React from "react";
interface IProps {
  className?: string;
}
const LoadingImageComponent = ({ className = "" }: IProps) => {
  return <Skeleton.Image className={className} />;
};
export default React.memo(LoadingImageComponent);
