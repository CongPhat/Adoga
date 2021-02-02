import Tab from "@components/commons/feature/Tab";
import TabPane from "@components/commons/feature/Tab/TabPane";
import { useAsync, useSingleAsync } from "@hook/useAsync";
import React, { useEffect } from "react";
import LocationRepositoryImpl from "@useCases/Location/index";
import LocationEntities from "@entities/Location";
import ItemsFeaturedHome from "./ItemsFeaturedHomes";
import TitleDashboard from "@components/commons/single/TitleDashboard";
import { useSetRecoilState } from "recoil";
import { locationTop } from "@view/Dashboard/store";

const FeaturedHomes = ({}) => {
  const setLocationTop = useSetRecoilState(locationTop);
  const asyncGetLocation = useSingleAsync<LocationEntities[]>(
    new LocationRepositoryImpl().GetLocationTop
  );
  useEffect(() => {
    asyncGetLocation.execute().then((res) => {
      setLocationTop({
        dataLocation: res,
      });
    });
  }, []);

  if (!asyncGetLocation.value) return null;
  const dataRender = [...asyncGetLocation.value].splice(0, 5);

  return (
    <div className="mt-120">
      <TitleDashboard text="Featured homes recommended for you" />
      <Tab>
        {dataRender.map((item: LocationEntities, index: number) => (
          <TabPane title={item.name} keyTab={item.id} key={index}>
            <ItemsFeaturedHome itemFeatured={item} />
          </TabPane>
        ))}
      </Tab>
    </div>
  );
};
export default React.memo(FeaturedHomes);
