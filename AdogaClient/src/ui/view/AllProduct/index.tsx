import InfiniteScrollLazyLoad from "@components/commons/effect/InfiniteScrollLazyLoadComponent";
import { createArrayLoadingEntities, spliceArray } from "@helper/functions";
const CardProductProperties = React.lazy(
  () => import("@components/commons/feature/CardProductProperties")
);
import React from "react";
import ProductsLike from "./components/ProductsLike";
import OptionsProduct from "./components/OptionsProduct";
import ProductView from "./useAllProduct";
import ProductEntities from "@entities/Product";
import PrivateLocation from "./PrivateLocation";

const AllProduct = ({}) => {
  console.log("vo day ne");

  const { data, effect } = ProductView.useAllProduct(
    createArrayLoadingEntities(3, ProductEntities)
  );
  return (
    <>
      <div className="all-product relative flex">
        <div className="w-1/4 mt-8 mr-4">
          <OptionsProduct />
          <ProductsLike />
        </div>
        <div className="w-3/4 ml-auto">
          {spliceArray(data.dataProducts, 0, 3).map((item, index) => (
            <CardProductProperties
              product={item}
              key={index}
              loading={effect.loading}
            />
          ))}
          <InfiniteScrollLazyLoad delay={1}>
            {spliceArray(
              data.dataProducts,
              3,
              data.dataProducts.length - 1
            ).map((item, index) => (
              <CardProductProperties
                product={item}
                key={index}
                loading={effect.loading}
              />
            ))}
          </InfiniteScrollLazyLoad>
        </div>
      </div>
    </>
  );
};
export default React.memo(PrivateLocation(AllProduct));
