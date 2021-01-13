import React, { ReactElement, useState } from "react";
interface IProps {
  children: any;
  title: ReactElement | string | number;
  keyTab: number | string;
  refTab?: any;
  reload?: boolean;
  disable?: boolean;
}
const TabPane = ({ children, refTab, keyTab, title, disable }: IProps) => {
  return <>{children}</>;
};
export default React.memo(TabPane);
