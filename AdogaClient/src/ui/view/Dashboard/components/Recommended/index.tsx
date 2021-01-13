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

const Recommended = ({}) => {
  const asyncGetProductRecommended = useSingleAsync<Array<ProductEntities>>(
    new ProductRepositoryImpl().GetProductRecommended
  );
  useEffect(() => {
    asyncGetProductRecommended.execute();
  }, []);

  if (!asyncGetProductRecommended.value) return null;

  return (
    <div className=" mt-60">
      <TitleDashboard text="Recommended places to stay for your next trip!" />
      <div className="w-5/6 m-auto grid grid-cols-3 gap-4">
        {asyncGetProductRecommended.value.map((item, index) => (
          <CardProductSimple product={item} key={index} />
        ))}
      </div>
    </div>
  );
};
export default React.memo(Recommended);
