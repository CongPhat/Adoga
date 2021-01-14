import Tab from "@components/commons/feature/Tab";
import TabPane from "@components/commons/feature/Tab/TabPane";
import { useAsync, useSingleAsync } from "@hook/useAsync";
import React, { useEffect } from "react";
import LocationRepositoryImpl from "@useCases/Location/index";
import LocationEntities from "@entities/Location";
import TitleDashboard from "@components/commons/single/TitleDashboard";
import ProductRepositoryImpl from "@useCases/Product";
import ProductEntities from "@entities/Product";
import CardProductSimple from "@components/commons/feature/CardProductSimple";
import Slider from "@components/commons/feature/Slider";

const TopDestionations = ({}) => {
  const asyncGetTopLocation = useSingleAsync<Array<LocationEntities>>(
    new LocationRepositoryImpl().GetLocationTop
  );
  useEffect(() => {
    asyncGetTopLocation.execute();
  }, []);

  if (!asyncGetTopLocation.value) return null;
  return (
    <div className=" mt-60">
      <TitleDashboard text="Top destinations in Vietnam" />
      <Slider listItem={asyncGetTopLocation.value} />
    </div>
  );
};
export default React.memo(TopDestionations);
