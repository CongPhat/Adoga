import { dataLocationFake } from "src/core/data/dataFake";
import LocationEntities from "@entities/Location";
import Repository from "@useCases/Structure";
import LocationService from "@api/location";

export default class LocationRepositoryImpl extends LocationService {
  GetLocationTop: () => Promise<Array<LocationEntities>>;
  GetLocation: () => Promise<Array<LocationEntities>>;
  GetDetailLocation: (locationId: string) => Promise<LocationEntities>;
  constructor() {
    super();

    this.GetLocation = async (): Promise<Array<LocationEntities>> => {
      return await this.getList().then((res) => {
        return LocationEntities.CreateList(res.data.data || []);
      });
    };

    this.GetLocationTop = async (): Promise<Array<LocationEntities>> => {
      return await this.getListLocationTop().then((res) => {
        return LocationEntities.CreateList(res.data.data || []);
      });
    };

    this.GetDetailLocation = async (
      locationId: string
    ): Promise<LocationEntities> => {
      return await this.getDetailLocationService(locationId).then((res) => {
        return new LocationEntities(res.data.data);
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
