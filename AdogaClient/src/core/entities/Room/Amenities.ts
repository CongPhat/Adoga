export interface IAmenities {
  id: string;
  name: string;
  icon: any;
}

export default class AmenitiesEntities implements IAmenities {
  id: string = "";
  name: string = "";
  icon: any;
  constructor(data) {
    this.name = data?.name || "";
    this.id = data?.id || "";
    this.icon = data?.icon || "";
  }
  public get Properties(): IAmenities {
    return {
      name: this.name,
      id: this.id,
      icon: this.icon,
    };
  }
  static CreateList(listData) {
    return listData.map((x) => new AmenitiesEntities(x));
  }
}
