import React, { useEffect } from "react";
import RoomEntities from "@entities/Room";
import { useSingleAsync } from "@hook/useAsync";
import ProductEntities from "@entities/Product";
import ProductRepositoryImpl from "@useCases/Product";
import CardProductSimple from "@components/commons/feature/CardProductSimple";
import {
  arrayDataLoadingFake,
  checkEffectData,
  createArrayLoadingEntities,
} from "@helper/functions";
interface IRoomLowestPrice {
  productId: string;
}

const ProductsLike = ({ productId }: IRoomLowestPrice) => {
  const asyncGetProductsLike = useSingleAsync<Array<ProductEntities>>(
    new ProductRepositoryImpl().GetProductsLikeByProduct,
    { initialData: createArrayLoadingEntities(3, ProductEntities) }
  );
  useEffect(() => {
    asyncGetProductsLike.execute(productId);
  }, []);

  const { status, value } = asyncGetProductsLike;
  return (
    <div className="">
      <p className="text-base text-black">
        Based on properties you've viewed, you might like:
      </p>
      <div className="grid grid-cols-4 gap-4">
        {value?.map((item, index) => (
          <CardProductSimple
            product={item}
            key={index}
            className="text-base"
            loading={status == "loading"}
          />
        ))}
      </div>
    </div>
  );
};
export default React.memo(ProductsLike);
