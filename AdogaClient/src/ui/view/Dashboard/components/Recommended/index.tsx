import { useSingleAsync } from "@hook/useAsync";
import React, { useEffect } from "react";
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
      <div className="w-5/6 m-auto grid lg:grid-cols-3 gap-4 sm:grid-cols-1">
        {asyncGetProductRecommended.value.map((item, index) => (
          <CardProductSimple product={item} key={index} />
        ))}
      </div>
    </div>
  );
};
export default React.memo(Recommended);
