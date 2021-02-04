import InfiniteScrollLazyLoad from "@components/commons/effect/InfiniteScrollLazyLoadComponent";
import ProductEntities, { IProduct } from "@entities/Product";
import { checkEffectData, createArrayImageSkeleton } from "@helper/functions";
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
      dataProduct: dataRender,
      dataRoom: null,
      type: "product",
      isShow: true,
    });
  }, [data]);

  const dataRender: ProductEntities = checkEffectData(
    status == "loading",
    data.dataDetailProduct
  )
    ? new ProductEntities({
        images: createArrayImageSkeleton(5),
      })
    : data.dataDetailProduct ||
      new ProductEntities({
        images: createArrayImageSkeleton(5),
      });

  // const { dataDetailProduct } = data;

  return (
    <section className="py-8">
      <HeaderProduct
        title={dataRender.productName}
        star={dataRender.productStar}
        street={dataRender.productStreet}
        loading={effect.loading}
      />
      <div className=" w-3/4">
        <HeaderBenefitProduct benefits={dataRender.productBenefits} />
      </div>
      <div className="flex mt-8">
        <div className=" w-3/4">
          <ImagesPreview
            images={dataRender.productImages}
            showImagesProduct={handleShowImagesProduct}
            loading={effect.loading}
          />
        </div>
        <div className=" w-1/4 ml-4">
          <RoomLowestPrice productId={params.productId} />
        </div>
      </div>
      <AboutProduct dataProduct={dataRender} loading={effect.loading}/>
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
