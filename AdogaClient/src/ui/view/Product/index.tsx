import React, { useCallback, useEffect } from "react";
import { useParams } from "react-router";
import { useSetRecoilState } from "recoil";
import HeaderProduct from "./components/Header";
import HeaderBenefitProduct from "./components/HeaderBenefit";
import ImagesPreview from "./components/ImagesPreview";
import ModalShowImages from "./components/ModalShowImages";
import RoomLowestPrice from "./components/RoomLowestPrice";
import PresenterProduct from "./presenterProduct";
import { modalImagesProduct } from "./store";
const Product = () => {
  const params: any = useParams();
  const setModal = useSetRecoilState(modalImagesProduct);
  const { presenter, data, effect } = PresenterProduct.useDetailProduct(
    params.productId
  );

  const handleShowImagesProduct = useCallback(() => {
    setModal({
      data: dataDetailProduct,
      type: "product",
      isShow: true,
    });
  }, [data]);

  if (data.dataDetailProduct == null) return;
  const { dataDetailProduct } = data;

  return (
    <section>
      <HeaderProduct
        title={dataDetailProduct.name}
        star={dataDetailProduct.star}
        street={dataDetailProduct.street}
      />
      <div className="w-1/2">
        <HeaderBenefitProduct benefits={dataDetailProduct.benefits} />
      </div>
      <div className="flex mt-8">
        <div className=" w-3/4">
          <ImagesPreview
            images={dataDetailProduct.images}
            showImagesProduct={handleShowImagesProduct}
          />
        </div>
        <div className=" w-1/4 ml-4">
          <RoomLowestPrice room={dataDetailProduct.room} />
        </div>
      </div>
      <ModalShowImages />
    </section>
  );
};
export default React.memo(Product);
