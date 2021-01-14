import { dataLocationFake } from "src/core/data/dataFake";
import LocationEntities from "@entities/Location";
import Repository from "@useCases/Structure";

export default class LocationRepositoryImpl implements Repository {
  public async Get(): Promise<LocationEntities[]> {
    const dataTopFive =
      dataLocationFake.length > 5
        ? dataLocationFake.slice(0, 5)
        : dataLocationFake;
    return LocationEntities.CreateList(dataTopFive);
  }
  public async GetLocationTop(): Promise<LocationEntities[]> {
    const dataLocationTop = dataLocationFake.filter((x) => x.isTop);
    return LocationEntities.CreateList(dataLocationTop);
  }
}
