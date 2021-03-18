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
import RoomService from "@api/room";

export default class RoomRepositoryImpl extends RoomService {
  GetRoomsByProduct: (
    productId,
    pageSize,
    pageNumber
  ) => Promise<RoomEntities[]>;
  GetRoomLowest: (productId) => Promise<RoomEntities>;
  GetDetailRoom: (roomId) => Promise<RoomEntities>;
  constructor() {
    super();

    this.GetRoomsByProduct = async (
      productId,
      pageSize,
      pageNumber
    ): Promise<RoomEntities[]> => {
      return await this.GetRoomByProductService(
        productId,
        pageSize,
        pageNumber
      ).then((res) => {
        return RoomEntities.CreateList(res.data.data || []);
      });
    };

    //get room lowest
    this.GetRoomLowest = async (productId): Promise<RoomEntities> => {
      return await this.GetRoomLowestService(productId).then((res) => {
        return new RoomEntities(res.data.data);
      });
    };

    this.GetRoomLowest = async (productId): Promise<RoomEntities> => {
      return await this.GetRoomLowestService(productId).then((res) => {
        return new RoomEntities(res.data.data);
      });
    };

    this.GetDetailRoom = async (roomId: string): Promise<RoomEntities> => {
      return await this.GetDetailRoomService(roomId).then((res) => {
        console.log(res, "ressss");

        return new RoomEntities(res.data.data);
      });
    };

    // this.GetDetailProduct = async (productId): Promise<ProductEntities> => {
    //   return await this.getDetailProductService(productId).then((res) => {
    //     return new ProductEntities(res.data.data);
    //   });
    // };
  }

  // public async GetRoomsByProduct(productId: string): Promise<RoomEntities[]> {
  //   const dataFind = dataProductFake.find((x) => x.id == productId);
  //   const dataRoom: Array<RoomEntities> = RoomEntities.CreateList(
  //     dataFind.rooms
  //   );
  //   const dataRoomAmenitiesImportant = dataRoom.map((x) => {
  //     let dataAmenities = [];
  //     x.facilities.forEach((facilities: FacilitiesEntities) => {
  //       dataAmenities.push(
  //         ...facilities.amenities.filter((x) => x.important == true)
  //       );
  //     });
  //     dataAmenities.splice(4, dataAmenities.length - 1);
  //     return x.setAmenitiesImportant(dataAmenities);
  //   });
  //   return dataRoomAmenitiesImportant;
  // }

  // public async GetDetailRoom(roomId: string): Promise<RoomEntities> {
  //   const dataFind = [dataRoom, dataRoom1].find((x) => x.id == roomId);
  //   return new RoomEntities(dataFind);
  // }
}
