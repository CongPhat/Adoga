import AmenitiesEntities from "./Amenities";

export interface IFacilities {
  id: string;
  name: string;
  amenities: Array<AmenitiesEntities>;
}

export default class FacilitiesEntities implements IFacilities {
  id: string = "";
  name: string = "";
  amenities: Array<AmenitiesEntities>;

  constructor(data) {
    this.name = data?.name;
    this.id = data?.id;
    this.amenities = this.setAmenities(data?.amenities);
  }
  private setAmenities(listAmenities): Array<AmenitiesEntities> {
    return AmenitiesEntities.CreateList(listAmenities);
  }
  public get Properties(): IFacilities {
    return {
      name: this.name,
      id: this.id,
      amenities: this.amenities,
    };
  }
  static CreateList(listData) {
    return listData.map((x) => new FacilitiesEntities(x));
  }
}
