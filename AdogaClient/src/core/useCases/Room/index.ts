import {
  dataProductFake,
  dataProductRecommended,
  dataRoom,
  dataRoom1,
} from "src/core/data/dataFake";
import LocationEntities from "@entities/Location";
import Repository from "@useCases/Structure";
import ProductEntities from "@entities/Product";
import RoomEntities from "@entities/Room";
import { data } from "jquery";
import FacilitiesEntities from "@entities/Room/facilities";

export default class RoomRepositoryImpl implements Repository {
  public async Get(): Promise<any[]> {
    return;
  }

  public async GetRoomsByProduct(productId: string): Promise<RoomEntities[]> {
    const dataFind = dataProductFake.find((x) => x.id == productId);
    const dataRoom: Array<RoomEntities> = RoomEntities.CreateList(
      dataFind.rooms
    );
    const dataRoomAmenitiesImportant = dataRoom.map((x) => {
      let dataAmenities = [];
      x.facilities.forEach((facilities: FacilitiesEntities) => {
        dataAmenities.push(
          ...facilities.amenities.filter((x) => x.important == true)
        );
      });
      dataAmenities.splice(4, dataAmenities.length - 1);
      return x.setAmenitiesImportant(dataAmenities);
    });
    return dataRoomAmenitiesImportant;
  }

  public async GetDetailRoom(roomId: string): Promise<RoomEntities> {
    const dataFind = [dataRoom, dataRoom1].find((x) => x.id == roomId);
    return new RoomEntities(dataFind);
  }
}
