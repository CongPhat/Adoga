import InfiniteScrollLazyLoad from "@components/commons/effect/InfiniteScrollLazyLoadComponent";
import RoomsProduct from "@view/Room/components/RoomsProduct";
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

const ProductsLike = React.lazy(() => import("./components/ProductsLike"));
const ProductsViewed = React.lazy(() => import("./components/ProductsViewed"));
const AboutProduct = React.lazy(() => import("./components/AboutProduct"));

const Product = () => {
  const params: any = useParams();
  const setModal = useSetRecoilState(modalImagesProduct);
  const { presenter, data, effect } = PresenterProduct.useDetailProduct(
    params.productId
  );

  const handleShowImagesProduct = useCallback(() => {
    setModal({
      dataProduct: dataDetailProduct,
      dataRoom: null,
      type: "product",
      isShow: true,
    });
  }, [data]);

  if (data.dataDetailProduct == null) return <></>;
  const { dataDetailProduct } = data;
  console.log(dataDetailProduct, "dataDetailProduct");
  return (
    <section className="py-8">
      <HeaderProduct
        title={dataDetailProduct.productName}
        star={dataDetailProduct.productStar}
        street={dataDetailProduct.productStreet}
      />
      <div className=" w-3/4">
        <HeaderBenefitProduct benefits={dataDetailProduct.productBenefits} />
      </div>
      <div className="flex mt-8">
        <div className=" w-3/4">
          <ImagesPreview
            images={dataDetailProduct.productImages}
            showImagesProduct={handleShowImagesProduct}
          />
        </div>
        <div className=" w-1/4 ml-4">
          <RoomLowestPrice room={dataDetailProduct.productRoom} />
        </div>
      </div>
      <AboutProduct dataProduct={dataDetailProduct} />
      {/* <div className="mt-16">
        <RoomsProduct productId={params.productId} />
      </div> */}
      <InfiniteScrollLazyLoad delay={1}>
        <RoomsProduct productId={params.productId} />
        <ProductsLike />
        <ProductsViewed />
      </InfiniteScrollLazyLoad>
      <ModalShowImages />
    </section>
  );
};
export default React.memo(Product);
