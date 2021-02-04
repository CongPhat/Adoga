import { Skeleton } from "antd";
import React, { ReactElement } from "react";
interface IProps {
  loading?: boolean;
  children?: any;
  className?: string;
  rowsSkeleton?: number;
  title?: boolean;
  reverse?: boolean;
}
const SkeletonComponent = ({
  loading,
  children,
  className = "",
  rowsSkeleton,
  title = true,
  reverse = false,
}: IProps) => {
  if (loading)
    return (
      <Skeleton
        className={`${className} ${reverse ? "ant-skeleton-reverse" : ""}`}
        active
        paragraph={{ rows: rowsSkeleton }}
        title={title}
      />
    );
  return <>{children}</>;
};
export default React.memo(SkeletonComponent);
