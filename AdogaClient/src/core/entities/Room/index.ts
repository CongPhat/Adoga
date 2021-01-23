import BenefitEntities from "@entities/Benefits";
import FacilitiesEntities from "./facilities";

export interface IRoom {
  id: string;
  name: string;
  price: number;
  discount: number;
  people: number;
  images: Array<{
    linkImage: string;
    title: string;
  }>;
  only: number;
  facilities: Array<FacilitiesEntities>;
}

export default class RoomEntities implements IRoom {
  id: string = "";
  name: string = "";
  price: number = 0;
  locationId: string = "";
  imageThumbnail: string = "";
  images: Array<{
    linkImage: string;
    title: string;
  }>;
  people: number;
  discount: number = 0;
  facilities: Array<FacilitiesEntities>;
  only: number;

  constructor(data) {
    this.name = data?.name;
    this.id = data?.id;
    this.price = data?.price;
    this.locationId = data?.locationId;
    this.imageThumbnail = data?.imageThumbnail;
    this.discount = data?.discount || this.discount;
    this.facilities = this.setFacilities(data?.facilities || []);
    this.images = data?.images || [];
    this.only = data?.only || 0;
    this.people = data?.people || 0;
  }
  private setFacilities(listFacilities): Array<FacilitiesEntities> {
    return FacilitiesEntities.CreateList(listFacilities);
  }
  public get Properties(): IRoom {
    return {
      name: this.name,
      price: this.price,
      id: this.id,
      people: this.people,
      discount: this.discount,
      images: this.images,
      only: this.only,
      facilities: this.facilities,
    };
  }
  static CreateList(listData) {
    return listData.map((x) => new RoomEntities(x));
  }
}
