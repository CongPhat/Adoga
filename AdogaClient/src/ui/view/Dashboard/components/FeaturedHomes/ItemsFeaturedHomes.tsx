import LoadingComponent from "@components/commons/effect/LoadingComponent";
import Products from "@components/commons/feature/Products";
import EmptyComponent from "@components/commons/single/EmptyComponent";
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

  // if (!asyncGetProduct.value) return null;

  if (asyncGetProduct.value && asyncGetProduct.value.length == 0) {
    return (
      <div className="h-350 flex justify-center items-center">
        <EmptyComponent
          text={
            <div className="flex flex-col">
              <span>Currently this location does not support products.</span>
              <span className="text-blue-600">
                Please contact us for our assistance.
              </span>
            </div>
          }
        />
      </div>
    );
  }

  // if (asyncGetProduct.status == "loading") {
  //   return (
  //     <div className="h-120">
  //       <LoadingComponent />
  //     </div>
  //   );
  // }

  return (
    <div>
      <Products
        listProducts={asyncGetProduct.value}
        loading={asyncGetProduct.status == "loading"}
      />
      <div className="mt-16 text-center">
        <Button
          className=" text-base pt-2 pb-3"
          onClick={() =>
            history.push(`${PARAMS.ALLPRODUCT}?location=${itemFeatured.id}`)
          }
          loading={asyncGetProduct.status == "loading"}
        >
          {!(asyncGetProduct.status == "loading") && (
            <span>See more ({itemFeatured.name}) properties</span>
          )}
        </Button>
      </div>
    </div>
  );
};
export default React.memo(ItemsFeaturedHome);
