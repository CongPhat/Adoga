import { Empty, Skeleton } from "antd";
import { title } from "process";
import React from "react";
interface IProps {
  className?: string;
  row?: number;
  title?: boolean;
}
const LoadingParagraphComponent = ({
  className = "",
  row = 0,
  title = true,
}: IProps) => {
  return (
    <Skeleton
      className={className}
      active
      paragraph={{ rows: row }}
      title={title}
    />
  );
};
export default React.memo(LoadingParagraphComponent);
