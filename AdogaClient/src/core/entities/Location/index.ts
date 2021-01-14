interface ILocation {
  id: string;
  name: string;
  image: string;
  isTop: boolean;
  accommodations: number;
}

export default class LocationEntities implements ILocation {
  name: string = "";
  id: string = "";
  image: string;
  isTop: boolean;
  accommodations: number;
  constructor(data) {
    this.name = data?.name;
    this.id = data?.id;
    this.image = data?.image || "";
    this.isTop = data?.id || false;
    this.accommodations = data?.accommodations || 0;
  }
  public get Properties(): ILocation {
    return {
      name: this.name,
      id: this.id,
      image: this.image,
      isTop: this.isTop,
      accommodations: this.accommodations,
      s,
    };
  }
  static CreateList(listData) {
    return listData.map((x) => new LocationEntities(x));
  }
}
