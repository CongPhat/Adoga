import ProductEntities from "@entities/Product";
import RoomEntities from "@entities/Room";

interface IBill {
  billId: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  region: string;
  dateFrom: string;
  dateTo: string;
  smoking: boolean;
  bed: boolean;
  time: number;
  room: RoomEntities;
  product: ProductEntities;
  totalRoom: number;
  totalDate: number;
  price: number;
  status: "success" | "fail" | "confirm";
}

export default class BillEntities implements IBill {
  billId: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  region: string;
  dateFrom: string;
  dateTo: string;
  smoking: boolean;
  bed: boolean;
  time: number;
  room: RoomEntities;
  product: ProductEntities;
  totalRoom: number;
  totalDate: number;
  price: number;
  status: "success" | "fail" | "confirm";

  constructor(data) {
    this.billId = data?.billId || "";
    this.fullName = data?.fullName || "";
    this.email = data?.email || "";
    this.phoneNumber = data?.phoneNumber || "";
    this.region = data?.region || "";
    this.dateFrom = data?.dateFrom || "";
    this.dateTo = data?.dateTo || "";
    this.smoking = data?.smoking || false;
    this.bed = data?.bed || false;
    this.time = data?.time || 0;
    this.totalRoom = data?.totalRoom || 0;
    this.totalDate = data?.totalDate || 0;
    this.price = data?.price || 0;
    this.status = this.setStatus(data?.status || 0);
    this.product = this.setProduct(data?.product);
    this.room = this.setRoom(data?.room);
  }
  private setProduct(dataProduct) {
    return new ProductEntities(dataProduct);
  }
  private setRoom(dataRoom) {
    return new RoomEntities(dataRoom);
  }
  private setStatus(status: number) {
    switch (status) {
      case 1:
        return "success";
      case 2:
        return "fail";
      default:
        return "confirm";
    }
  }
  public get Properties(): IBill {
    return {
      billId: this.billId,
      fullName: this.fullName,
      email: this.email,
      phoneNumber: this.phoneNumber,
      region: this.region,
      dateFrom: this.dateFrom,
      dateTo: this.dateTo,
      smoking: this.smoking,
      bed: this.bed,
      time: this.time,
      room: this.room,
      product: this.product,
      totalRoom: this.totalRoom,
      totalDate: this.totalDate,
      price: this.price,
      status: this.status,
    };
  }
  static CreateList(listData) {
    return listData.map((x) => new BillEntities(x));
  }
}
