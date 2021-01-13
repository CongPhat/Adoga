import React from "react";
interface IProps {
  text: string;
}
const TitleDashboard = ({ text }: IProps) => {
  return <h6 className="text-2xl mb-12 text-center">{text}</h6>;
};
export default React.memo(TitleDashboard);
