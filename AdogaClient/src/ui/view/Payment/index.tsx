import InfiniteScrollLazyLoad from "@components/commons/effect/InfiniteScrollLazyLoadComponent";
import RoomsProduct from "@view/Room/components/RoomsProduct";
import React, { useCallback, useEffect } from "react";
import { useParams } from "react-router";
import { useSetRecoilState } from "recoil";
import CustomerInformation from "./components/CustomerInformation";
import { modalImagesProduct } from "./store";

const Payment = () => {
  return (
    <section className="flex">
      <div className="w-8/12">
        <CustomerInformation />
      </div>
      {/* <HeaderProduct
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
      <div className="mt-16">
        <RoomsProduct productId={params.productId} />
      </div>
      <InfiniteScrollLazyLoad delay={1}>
        <ProductsLike />
        <ProductsViewed />
        <AboutProduct dataProduct={dataDetailProduct} />
      </InfiniteScrollLazyLoad>
      <ModalShowImages /> */}
    </section>
  );
};
export default React.memo(Payment);
