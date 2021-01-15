import ProductEntities from "@entities/Product";
import { parseSearchToObject } from "@helper/functions";
import { useSingleAsync } from "@hook/useAsync";
import ProductRepositoryImpl from "@useCases/Product";
import { useEffect } from "react";
import { useLocation } from "react-router";

interface IUseAllProduct {
  presenter: {};
  data: {
    dataProducts: Array<ProductEntities>;
  };
  effect: {
    loading: boolean;
    error: boolean;
  };
}

const useAllProduct = (): IUseAllProduct => {
  const asyncGetAllProduct = useSingleAsync<Array<ProductEntities>>(
    new ProductRepositoryImpl().GetAllProduct
  );
  const location = useLocation();

  useEffect(() => {
    const searchData = parseSearchToObject(location.search);
    asyncGetAllProduct.execute(searchData);
  }, [location.search]);
  return {
    presenter: {},
    data: {
      dataProducts: asyncGetAllProduct.value || [],
    },
    effect: {
      loading: asyncGetAllProduct.status == "loading",
      error: asyncGetAllProduct.status == "error",
    },
  };
};
export default useAllProduct;
