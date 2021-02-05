import {
  dataProductFake,
  dataProductRecommended,
  dataRoom,
  dataRoom1,
} from "src/core/data/dataFake";
import ProductEntities from "@entities/Product";
import ProductService from "@api/product";
import { parseObjectToSearch } from "@helper/functions";

export default class ProductRepositoryImpl extends ProductService {
  GetProductByLocation: (
    locationId,
    pageSize,
    pageNumber
  ) => Promise<ProductEntities[]>;
  GetAllProductLocation: (options) => Promise<ProductEntities[]>;
  GetProductsLikeByProduct: (productId: string) => Promise<ProductEntities[]>;
  GetProductsLikeByLocation: (
    locationId: string,
    pagination: any
  ) => Promise<ProductEntities[]>;
  GetProductRecommended: (optios) => Promise<ProductEntities[]>;
  GetDetailProduct: (productId: string) => Promise<ProductEntities>;

  constructor() {
    super();

    this.GetProductByLocation = async (
      locationId,
      pageSize,
      pageNumber
    ): Promise<ProductEntities[]> => {
      return await this.getProductByLocationService(
        locationId,
        pageSize,
        pageNumber
      ).then((res) => {
        return ProductEntities.CreateList(res.data.data || []);
      });
    };

    this.GetAllProductLocation = async (
      options
    ): Promise<ProductEntities[]> => {
      const optionsQuery = parseObjectToSearch(options);
      return await this.getAllProductLocationService(optionsQuery).then(
        (res) => {
          return ProductEntities.CreateList(res.data.data || []);
        }
      );
    };

    this.GetProductsLikeByProduct = async (
      productId
    ): Promise<ProductEntities[]> => {
      return await this.getProductsLikeService(productId).then((res) => {
        return ProductEntities.CreateList(res.data.data || []);
      });
    };

    this.GetProductsLikeByLocation = async (
      locationId,
      pagination
    ): Promise<ProductEntities[]> => {
      const optionsQuery = parseObjectToSearch(pagination);
      return await this.getProductsLikeByLocationService(
        locationId,
        optionsQuery
      ).then((res) => {
        return ProductEntities.CreateList(res.data.data || []);
      });
    };

    this.GetProductRecommended = async (
      options
    ): Promise<ProductEntities[]> => {
      const optionsQuery = parseObjectToSearch(options);
      return await this.getProductRecommendedService(optionsQuery).then(
        (res) => {
          return ProductEntities.CreateList(res.data.data || []);
        }
      );
    };

    this.GetDetailProduct = async (productId): Promise<ProductEntities> => {
      return await this.getDetailProductService(productId).then((res) => {
        return new ProductEntities(res.data.data);
      });
    };
  }

  // public async GetProductByLocation(
  //   locationId: string
  // ): Promise<ProductEntities[]> {
  //   const dataReceive = dataProductFake.filter(
  //     (x) => x.locationId == locationId
  //   );
  //   return ProductEntities.CreateList(dataReceive);
  // }

  public async GetAllProduct(dataSearch): Promise<ProductEntities[]> {
    //fake
    const { location, type, PriceFrom, PriceTo } = dataSearch;
    let dataResult = [];
    if (location) {
      dataResult = dataProductFake.filter((x) => x.locationId == location);
    }
    if (type) {
      dataResult = dataResult.filter((x) => x.productType == type);
    }
    if (PriceFrom) {
      dataResult = dataResult.filter((x) => x.price >= parseInt(PriceFrom));
    }
    if (PriceTo) {
      dataResult = dataResult.filter((x) => x.price <= parseInt(PriceTo));
    }
    return ProductEntities.CreateList(dataResult);
  }

  public async GetProductsViewed(): Promise<ProductEntities[]> {
    //fake
    let dataResult = [...dataProductFake].splice(0, 6);
    return ProductEntities.CreateList(dataResult);
  }

  public async GetProductOfRoom(roomId: string): Promise<ProductEntities> {
    //fake
    const dataProductFind = dataProductFake.find(
      (x) => x.rooms.find((y) => y.id == roomId).id
    );
    if (dataProductFind) {
      const roomFind = [dataRoom, dataRoom1].find((x) => x.id == roomId);
      dataProductFind.rooms = [roomFind];
    }

    return new ProductEntities(dataProductFind);
  }
}
