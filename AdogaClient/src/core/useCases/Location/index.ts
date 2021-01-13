import { dataLocationFake } from "src/core/data/dataFake";
import LocationEntities from "@entities/Location";
import Repository from "@useCases/Structure";

export default class LocationRepositoryImpl implements Repository {
  public async Get(): Promise<LocationEntities[]> {
    return LocationEntities.CreateList(dataLocationFake);
  }
}
