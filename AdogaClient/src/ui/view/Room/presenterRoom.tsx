import ProductEntities from "@entities/Product";
import RoomEntities from "@entities/Room";
import { useSingleAsync } from "@hook/useAsync";
import ProductRepositoryImpl from "@useCases/Product";
import RoomRepositoryImpl from "@useCases/Room";
import { useEffect } from "react";

export interface IRoomPresenter {
  presenter?: {};
  data?: {
    dataListRoom?: Array<RoomEntities>;
  };
  effect?: {
    loading?: boolean;
    error?: boolean;
  };
}

export function useRoomProduct(productId): IRoomPresenter {
  const asyncGetListRoomProduct = useSingleAsync<Array<RoomEntities>>(
    new RoomRepositoryImpl().GetRoomsByProduct
  );
  useEffect(() => {
    asyncGetListRoomProduct.execute(productId);
  }, [productId]);
  return {
    presenter: {},
    data: {
      dataListRoom: asyncGetListRoomProduct.value || null,
    },
    effect: {
      loading: asyncGetListRoomProduct.status == "loading",
      error: asyncGetListRoomProduct.status == "error",
    },
  };
}
