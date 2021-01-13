import LoadingComponent from "@components/commons/effect/LoadingComponent";
import Products from "@components/commons/feature/Products";
import LocationEntities from "@entities/Location";
import { IProduct } from "@entities/Product";
import { useAsync, useSingleAsync } from "@hook/useAsync";
import ProductRepositoryImpl from "@useCases/Product";
import React, { useEffect } from "react";

interface Iprops {
  itemFeatured: LocationEntities;
}

const ItemsFeaturedHome = ({ itemFeatured }: Iprops) => {
  const asyncGetProduct = useSingleAsync<Array<IProduct>>(
    new ProductRepositoryImpl().GetProductByLocation
  );
  useEffect(() => {
    asyncGetProduct.execute(itemFeatured.id);
  }, []);

  if (!asyncGetProduct.value) return null;
  if (asyncGetProduct.status == "loading") {
    return (
      <div className="h-120">
        <LoadingComponent />
      </div>
    );
  }

  return (
    <div>
      <Products listProducts={asyncGetProduct.value} />
    </div>
  );
};
export default React.memo(ItemsFeaturedHome);
