export interface IAmenities {
  id: string;
  name: string;
  icon: any;
  important: boolean;
}

export default class AmenitiesEntities implements IAmenities {
  id: string = "";
  name: string = "";
  icon: any;
  important: boolean;
  constructor(data) {
    this.name = data?.name || "";
    this.id = data?._id || "";
    this.icon = data?.icon || "";
    this.important = data?.important || false;
  }
  public get Properties(): IAmenities {
    return {
      name: this.name,
      id: this.id,
      icon: this.icon,
      important: this.important,
    };
  }
  static CreateList(listData) {
    if (listData) {
      return listData.map((x) => new AmenitiesEntities(x));
    }
  }
}
