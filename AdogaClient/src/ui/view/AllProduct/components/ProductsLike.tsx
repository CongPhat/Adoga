import React, { useEffect } from "react";
import { useSingleAsync } from "@hook/useAsync";
import ProductEntities from "@entities/Product";
import ProductRepositoryImpl from "@useCases/Product";
import {
  createArrayLoadingEntities,
  parseSearchToObject,
} from "@helper/functions";
import { useLocation } from "react-router";
import CardProductSimple from "@components/commons/feature/CardProductSimple";

const ProductsLike = ({}) => {
  const asyncGetProductsLike = useSingleAsync<Array<ProductEntities>>(
    new ProductRepositoryImpl().GetProductsLikeByLocation,
    { initialData: createArrayLoadingEntities(3, ProductEntities) }
  );
  const location = useLocation();
  const { status } = asyncGetProductsLike;

  useEffect(() => {
    const searchData = parseSearchToObject(location.search);
    const { location: locationId } = searchData;
    asyncGetProductsLike.execute(locationId, { pageSize: 3, pageNumber: 1 });
  }, []);

  return (
    <>
      <span className="text-xs font-semibold mt-4 block">
        Based on properties you've viewed, you might like:
      </span>
      <div className="search-product relative">
        {asyncGetProductsLike.value?.map((item, index) => (
          <CardProductSimple
            product={item}
            key={index}
            className="text-base"
            loading={status == "loading"}
          />
        ))}
      </div>
    </>
  );
};
export default React.memo(ProductsLike);
