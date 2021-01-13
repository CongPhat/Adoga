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
}
