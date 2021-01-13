import Tab from "@components/commons/feature/Tab";
import TabPane from "@components/commons/feature/Tab/TabPane";
import { useAsync } from "@hook/useAsync";
import React, { useEffect } from "react";
import LocationRepositoryImpl from "@useCases/Location/index";
import LocationEntities from "@entities/Location";
import ItemsFeaturedHome from "./ItemsFeaturedHomes";
import TitleDashboard from "@components/commons/single/TitleDashboard";

const FeaturedHomes = ({}) => {
  const [asyncGetLocation] = useAsync([new LocationRepositoryImpl().Get]);
  useEffect(() => {
    asyncGetLocation.execute();
  }, []);

  if (!asyncGetLocation.value) return null;

  return (
    <div className="mt-120">
      <TitleDashboard text="Featured homes recommended for you" />
      <Tab>
        {asyncGetLocation.value.map((item: LocationEntities, index: number) => (
          <TabPane title={item.name} keyTab={item.id} key={index}>
            <ItemsFeaturedHome itemFeatured={item} />
          </TabPane>
        ))}
      </Tab>
    </div>
  );
};
export default React.memo(FeaturedHomes);
