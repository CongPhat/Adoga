import ProductEntities from "@entities/Product";
import { parseObjectToSearch, parseSearchToObject } from "@helper/functions";
import { useSingleAsync } from "@hook/useAsync";
import ProductRepositoryImpl from "@useCases/Product";
import { useCallback, useEffect, useMemo } from "react";
import {
  faHome,
  faBuilding,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { useHistory, useLocation } from "react-router";

export interface IItemSearchProduct {
  onChange: (checked: boolean, data: string) => void;
  icon: any;
  text: string;
  data: string;
  defaultChecked: boolean;
}
export interface IUseProduct {
  presenter?: {
    pushSearch?: (checked: boolean, data: any, type: string) => void;
  };
  data?: {
    dataProducts?: Array<ProductEntities>;
    dataItemSearch?: Array<IItemSearchProduct>;
  };
  effect?: {
    loading?: boolean;
    error?: boolean;
  };
}

class ProductView {
  static useSearchProduct(onChange, onChangeBenefit): IUseProduct {
    const history = useHistory();
    const location = useLocation();
    const params = useMemo(() => {
      return parseSearchToObject(location.search);
    }, [location.search]);

    const pushSearch = useCallback((checked, data, type) => {
      let searchData = parseSearchToObject(history.location.search);
      if (checked) searchData[type] = data;
      else delete searchData[type];
      history.push(
        `${history.location.pathname}${parseObjectToSearch(searchData)}`
      );
    }, []);

    const itemsSearch: Array<IItemSearchProduct> = useMemo(() => {
      const arraySearch = [];
      if (!params.type || params.type == "1")
        arraySearch.push({
          data: "1",
          text: "Private stays",
          onChange: onChange,
          icon: faHome,
          defaultChecked: params.type == "1",
        });
      if (!params.type || params.type == "2")
        arraySearch.push({
          data: "2",
          text: "Serviced apartment",
          onChange: onChange,
          icon: faBuilding,
          defaultChecked: params.type == "2",
        });
      arraySearch.push({
        data: "1",
        text: "I want free breakfast",
        onChange: onChangeBenefit,
        icon: faUtensils,
        defaultChecked: params.benefit == "1",
      });
      return arraySearch;
    }, [location.search]);

    return {
      presenter: {
        pushSearch,
      },
      data: {
        dataItemSearch: itemsSearch,
      },
    };
  }

  static useAllProduct = (dataFake): IUseProduct => {
    const asyncGetAllProduct = useSingleAsync<Array<ProductEntities>>(
      new ProductRepositoryImpl().GetAllProductLocation,
      { initialData: dataFake }
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
}

export default ProductView;
