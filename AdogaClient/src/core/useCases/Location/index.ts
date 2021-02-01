import { dataLocationFake } from "src/core/data/dataFake";
import LocationEntities from "@entities/Location";
import Repository from "@useCases/Structure";
import LocationService from "@api/location";

export default class LocationRepositoryImpl extends LocationService {
  GetLocationTop: () => Promise<LocationEntities>;
  GetLocation: () => Promise<LocationEntities>;
  constructor() {
    super();

    this.GetLocation = async (): Promise<LocationEntities> => {
      return await this.getList().then((res) => {
        return LocationEntities.CreateList(res.data.data || []);
      });
    };

    this.GetLocationTop = async (): Promise<LocationEntities> => {
      return await this.getListLocationTop().then((res) => {
        return LocationEntities.CreateList(res.data.data || []);
      });
    };
  }

  public async Get(): Promise<LocationEntities[]> {
    const dataTopFive =
      dataLocationFake.length > 5
        ? dataLocationFake.slice(0, 5)
        : dataLocationFake;
    return LocationEntities.CreateList(dataTopFive);
  }
}
