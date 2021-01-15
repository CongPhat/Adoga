import CardProductProperties from "@components/commons/feature/CardProductProperties";
import React from "react";
import useAllProduct from "./useAllProduct";

const AllProduct = ({}) => {
  const { presenter, data, effect } = useAllProduct();

  return (
    <div className="all-product relative">
      <div className="w-3/4 ml-auto">
        {data.dataProducts.map((item, index) => (
          <CardProductProperties
            product={item}
            key={index}
            loading={effect.loading}
          />
        ))}
      </div>
    </div>
  );
};
export default React.memo(AllProduct);
