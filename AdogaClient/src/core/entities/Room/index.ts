import BenefitEntities from "@entities/Benefits";
import AmenitiesEntities from "./Amenities";
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
  rating: number;
  beds: number;
  size: string;
  amenitiesImportant: Array<AmenitiesEntities>;
  benefitsRoom: Array<BenefitEntities>;
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
  rating: number;
  beds: number;
  size: string;
  amenitiesImportant: Array<AmenitiesEntities>;
  benefitsRoom: Array<BenefitEntities>;

  constructor(data) {
    this.name = data?.name;
    this.id = data?._id;
    this.price = data?.price;
    this.locationId = data?.locationId;
    this.imageThumbnail = data?.imageThumbnail;
    this.discount = data?.discount || this.discount;
    this.facilities = this.setFacilities(data?.facilities || []);
    this.images = data?.images || [];
    this.only = data?.only || 0;
    this.people = data?.people || 0;
    this.rating = data?.rating || 0;
    this.beds = data?.beds || 0;
    this.size = data?.size || "";
    this.benefitsRoom = this.setBenefitsRoom(data?.benefitsRoom || []);
    this.amenitiesImportant = [];
  }
  private setFacilities(listFacilities): Array<FacilitiesEntities> {
    return FacilitiesEntities.CreateList(listFacilities);
  }
  private setBenefitsRoom(listBenefits): Array<BenefitEntities> {
    return BenefitEntities.CreateList(listBenefits);
  }
  public setAmenitiesImportant(listAmenities): this {
    return AmenitiesEntities.CreateList(listAmenities || []);
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
      rating: this.rating,
      beds: this.beds,
      size: this.size,
      amenitiesImportant: this.amenitiesImportant,
      benefitsRoom: this.benefitsRoom,
    };
  }
  static CreateList(listData) {
    return listData.map((x) => new RoomEntities(x));
  }
}
