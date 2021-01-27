import ProductEntities from "@entities/Product";
import { useSingleAsync } from "@hook/useAsync";
import ProductRepositoryImpl from "@useCases/Product";
import { useEffect } from "react";

export interface IDetailProduct {
  presenter?: {};
  data?: {
    dataDetailProduct?: ProductEntities;
  };
  effect?: {
    loading?: boolean;
    error?: boolean;
  };
}

const usePayment = (): IDetailProduct => {
  return {
    presenter: {},
    data: {
      // dataDetailProduct: asyncGetDetailProduct.value || null,
    },
    effect: {
      // loading: asyncGetDetailProduct.status == "loading",
      // error: asyncGetDetailProduct.status == "error",
    },
  };
};
