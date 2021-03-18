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
  const params: {
    productId: string;
  } = useParams();
  const setModal = useSetRecoilState(modalImagesProduct);
  const { presenter, data, effect } = PresenterProduct.useDetailProduct(
    params.productId,
    new ProductEntities({
      images: createArrayImageSkeleton(5),
    })
  );

  const handleShowImagesProduct = useCallback(() => {
    setModal({
      dataProduct: dataDetailProduct,
      dataRoom: null,
      type: "product",
      isShow: true,
    });
  }, [data]);

  const { dataDetailProduct } = data;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params.productId]);

  return (
    <section className="py-8">
      <HeaderProduct
        title={dataDetailProduct.productName}
        star={dataDetailProduct.productStar}
        street={dataDetailProduct.productStreet}
        loading={effect.loading}
      />
      <div className=" w-3/4">
        <HeaderBenefitProduct benefits={dataDetailProduct.productBenefits} />
      </div>
      <div className="flex mt-8">
        <div className=" w-3/4">
          <ImagesPreview
            images={dataDetailProduct.productImages}
            showImagesProduct={handleShowImagesProduct}
            loading={effect.loading}
          />
        </div>
        <div className=" w-1/4 ml-4">
          <RoomLowestPrice productId={params.productId} />
        </div>
      </div>
      <AboutProduct dataProduct={dataDetailProduct} loading={effect.loading} />
      {/* <div className="mt-16">
        <RoomsProduct productId={params.productId} />
      </div> */}
      <InfiniteScrollLazyLoad delay={1}>
        <RoomsProduct productId={params.productId} />
        <ProductsLike productId={params.productId} />
        {/* <ProductsViewed /> */}
      </InfiniteScrollLazyLoad>
      <ModalShowImages />
    </section>
  );
};
export default React.memo(Product);
