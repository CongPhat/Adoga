import React, { useEffect } from "react";
import RoomEntities from "@entities/Room";
import { useSingleAsync } from "@hook/useAsync";
import ProductEntities from "@entities/Product";
import ProductRepositoryImpl from "@useCases/Product";
import CardProductSimple from "@components/commons/feature/CardProductSimple";
interface IRoomLowestPrice {}

const ProductsLike = ({}: IRoomLowestPrice) => {
  const asyncGetProductsLike = useSingleAsync<Array<ProductEntities>>(
    new ProductRepositoryImpl().GetProductsLikeByProduct
  );
  useEffect(() => {
    asyncGetProductsLike.execute();
  }, []);

  return (
    <div className="">
      <p className="text-base text-black">
        Based on properties you've viewed, you might like:
      </p>
      <div className="grid grid-cols-4 gap-4">
        {asyncGetProductsLike.value?.map((item, index) => (
          <CardProductSimple product={item} key={index} className="text-base" />
        ))}
      </div>
    </div>
  );
};
export default React.memo(ProductsLike);
