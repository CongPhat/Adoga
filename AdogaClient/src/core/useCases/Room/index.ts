import {
  dataProductFake,
  dataProductRecommended,
} from "src/core/data/dataFake";
import LocationEntities from "@entities/Location";
import Repository from "@useCases/Structure";
import ProductEntities from "@entities/Product";
import RoomEntities from "@entities/Room";

export default class RoomRepositoryImpl implements Repository {
  public async Get(): Promise<any[]> {
    return;
  }
  public async GetRoomsByProduct(productId: string): Promise<RoomEntities[]> {
    const dataFind = dataProductFake.find((x) => x.id == productId);
    return RoomEntities.CreateList(dataFind.rooms);
  }
}
