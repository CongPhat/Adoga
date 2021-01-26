import {
  dataProductFake,
  dataProductRecommended,
} from "src/core/data/dataFake";
import LocationEntities from "@entities/Location";
import Repository from "@useCases/Structure";
import ProductEntities from "@entities/Product";

export default class ProductRepositoryImpl implements Repository {
  public async Get(): Promise<any[]> {
    return;
  }
  public async GetProductByLocation(
    locationId: string
  ): Promise<ProductEntities[]> {
    const dataReceive = dataProductFake.filter(
      (x) => x.locationId == locationId
    );
    return ProductEntities.CreateList(dataReceive);
  }
  public async GetProductRecommended(): Promise<ProductEntities[]> {
    return ProductEntities.CreateList(dataProductRecommended);
  }
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
  public async GetProductsLikeByLocation(
    locationId
  ): Promise<ProductEntities[]> {
    //fake
    let dataResult = [...dataProductFake]
      .filter((x) => x.locationId == locationId)
      .splice(0, 3);
    return ProductEntities.CreateList(dataResult);
  }

  public async GetProductsLikeByProduct(): Promise<ProductEntities[]> {
    //fake
    let dataResult = [...dataProductFake].splice(0, 4);
    return ProductEntities.CreateList(dataResult);
  }

  public async GetProductsViewed(): Promise<ProductEntities[]> {
    //fake
    let dataResult = [...dataProductFake].splice(0, 6);
    return ProductEntities.CreateList(dataResult);
  }

  public async GetDetailProduct(productId): Promise<ProductEntities> {
    //fake
    return new ProductEntities(dataProductFake.find((x) => x.id == productId));
  }
}
