import { spliceArray } from "@helper/functions";
import InfiniteScrollLazyLoad from "@components/commons/effect/InfiniteScrollLazyLoadComponent";
import { useRoomProduct } from "@view/Room/presenterRoom";
import React from "react";
import DropdownSeeAllFacilities from "../DropdownSeeAllFacilities";
import LoadingComponent from "@components/commons/effect/LoadingComponent";
const ItemRoomProduct = React.lazy(() => import("../ItemRoomProduct"));

interface IRoomsProduct {
  productId: string;
}
const RoomsProduct = ({ productId }: IRoomsProduct) => {
  const { presenter, data, effect } = useRoomProduct(productId);
  const { dataListRoom } = data;

  if (effect.loading)
    return (
      <div className="w-full h-48 mt-10">
        <LoadingComponent />
      </div>
    );

  if (!dataListRoom) return <div className="h-350"></div>;

  return (
    <div className="mt-8">
      {spliceArray(dataListRoom, 0, 1).map((item, index) => (
        <ItemRoomProduct data={item} key={index} />
      ))}
      <InfiniteScrollLazyLoad delay={1}>
        {spliceArray(dataListRoom, 1, dataListRoom.length - 1).map(
          (item, index) => (
            <ItemRoomProduct data={item} key={index} />
          )
        )}
      </InfiniteScrollLazyLoad>
      <DropdownSeeAllFacilities />
    </div>
  );
};
export default React.memo(RoomsProduct);
