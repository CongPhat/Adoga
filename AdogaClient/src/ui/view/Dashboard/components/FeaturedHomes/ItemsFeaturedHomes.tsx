import LoadingComponent from "@components/commons/effect/LoadingComponent";
import Products from "@components/commons/feature/Products";
import { PARAMS } from "@config/index";
import LocationEntities from "@entities/Location";
import { IProduct } from "@entities/Product";
import { useAsync, useSingleAsync } from "@hook/useAsync";
import ProductRepositoryImpl from "@useCases/Product";
import { Button } from "antd";
import React, { useEffect } from "react";
import { useHistory } from "react-router";

interface Iprops {
  itemFeatured: LocationEntities;
}

const ItemsFeaturedHome = ({ itemFeatured }: Iprops) => {
  const history = useHistory();
  const asyncGetProduct = useSingleAsync<Array<IProduct>>(
    new ProductRepositoryImpl().GetProductByLocation
  );
  useEffect(() => {
    asyncGetProduct.execute(itemFeatured.id, 9, 1);
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
      <div className="mt-16 text-center">
        <Button
          className=" text-base pt-2 pb-3"
          onClick={() =>
            history.push(`${PARAMS.ALLPRODUCT}?location=${itemFeatured.id}`)
          }
        >
          <span>See more ({itemFeatured.name}) properties</span>
        </Button>
      </div>
    </div>
  );
};
export default React.memo(ItemsFeaturedHome);
