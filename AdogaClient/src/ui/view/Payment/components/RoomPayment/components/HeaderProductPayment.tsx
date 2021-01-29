import React, { useEffect } from "react";
import { Button, Form, Radio, Rate, Select } from "antd";
import ProductEntities from "@entities/Product";
import { useParams } from "react-router";
import { useSingleAsync } from "@hook/useAsync";
import ProductRepositoryImpl from "@useCases/Product";
interface IHeaderProductPayment {}

const HeaderProductPayment = ({}: IHeaderProductPayment) => {
  const params: any = useParams();
  const asyncGetProductOfRoom = useSingleAsync<ProductEntities>(
    new ProductRepositoryImpl().GetProductOfRoom
  );
  useEffect(() => {
    asyncGetProductOfRoom.execute(params.roomId);
  }, []);

  if (!asyncGetProductOfRoom.value) return null;
  const dataProduct = asyncGetProductOfRoom.value;

  return (
    <div className="bg-white p-4 shadow-x0 border border-gray-1100 relative">
      <div className="flex">
        <div className="w-120 h-32 rounded-sm overflow-hidden place-self-start inline-block">
          <img
            src={dataProduct.productImageThumbnail}
            alt={dataProduct.productName}
            className="object-cover"
          />
        </div>
        <div
          className="ml-4 inline-block"
          style={{ width: "calc(100% - 120px)" }}
        >
          <h1 className="text-xl">{dataProduct.productName}</h1>
          <Rate value={dataProduct.productStar} disabled className="text-xs" />
          <p className="text-xs font-light">{dataProduct.productStreet}</p>
        </div>
      </div>
      <div
        className="absolute w-12 h-10 bg-red-1200 text-white-100 text-center text-xs flex flex-col items-center justify-center rounded-sm"
        style={{ top: "10px", left: "-10px" }}
      >
        <p className="text-xl-em font-semibold ellipsis">{12}%</p>
        <span className="block text-xs-em ellipsis">DISCOUNT</span>
      </div>
    </div>
  );
};
export default React.memo(HeaderProductPayment);
