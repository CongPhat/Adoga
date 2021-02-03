import { useSingleAsync } from "@hook/useAsync";
import React, { useEffect } from "react";
import TitleDashboard from "@components/commons/single/TitleDashboard";
import ProductRepositoryImpl from "@useCases/Product";
import ProductEntities, { IProduct } from "@entities/Product";
import CardProductSimple from "@components/commons/feature/CardProductSimple";
import { PRODUCT_RECOMMENDED } from "@config/index";
import { checkEffectData, createArrayLoadingEntities } from "@helper/functions";

const Recommended = ({}) => {
  const asyncGetProductRecommended = useSingleAsync<Array<ProductEntities>>(
    new ProductRepositoryImpl().GetProductRecommended
  );

  const { status, value } = asyncGetProductRecommended;
  useEffect(() => {
    asyncGetProductRecommended.execute({
      ...PRODUCT_RECOMMENDED,
      pageSize: 3,
      pageNumber: 1,
    });
  }, []);

  const dataRender: Array<IProduct> = checkEffectData(
    status == "loading",
    value
  )
    ? createArrayLoadingEntities(3, ProductEntities)
    : value;

  return (
    <div className=" mt-60">
      <TitleDashboard text="Recommended places to stay for your next trip!" />
      <div className="w-5/6 m-auto grid lg:grid-cols-3 gap-4 sm:grid-cols-1">
        {dataRender?.map((item, index) => (
          <CardProductSimple
            product={item}
            key={index}
            loading={asyncGetProductRecommended.status == "loading"}
          />
        ))}
      </div>
    </div>
  );
};
export default React.memo(Recommended);
