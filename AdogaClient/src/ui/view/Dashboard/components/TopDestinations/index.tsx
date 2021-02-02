import React from "react";
import TitleDashboard from "@components/commons/single/TitleDashboard";
import Slider from "@components/commons/feature/Slider";
import { useRecoilValue } from "recoil";
import { locationTop } from "@view/Dashboard/store";

const TopDestionations = ({}) => {
  const dataLocationTop = useRecoilValue(locationTop);
  if (dataLocationTop.dataLocation.length == 0) return null;
  return (
    <div className=" mt-60">
      <TitleDashboard text="Top destinations in Vietnam" />
      <Slider listItem={dataLocationTop.dataLocation} />
    </div>
  );
};
export default React.memo(TopDestionations);
