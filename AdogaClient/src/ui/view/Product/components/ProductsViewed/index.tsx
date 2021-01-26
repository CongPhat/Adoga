import React, { useEffect } from "react";
import RoomEntities from "@entities/Room";
import { useSingleAsync } from "@hook/useAsync";
import ProductEntities from "@entities/Product";
import ProductRepositoryImpl from "@useCases/Product";
import CardProductSimple from "@components/commons/feature/CardProductSimple";
interface IRoomLowestPrice {}

const ProductsViewed = ({}: IRoomLowestPrice) => {
  const asyncGetProductsViewed = useSingleAsync<Array<ProductEntities>>(
    new ProductRepositoryImpl().GetProductsViewed
  );
  useEffect(() => {
    asyncGetProductsViewed.execute();
  }, []);

  return (
    <div className=" mt-8">
      <p className=" text-base text-black">You viewed</p>
      <div className="grid grid-cols-6 gap-2">
        {asyncGetProductsViewed.value?.map((item, index) => (
          <CardProductSimple
            product={item}
            key={index}
            className=" border-none text-sm"
          />
        ))}
      </div>
    </div>
  );
};
export default React.memo(ProductsViewed);
