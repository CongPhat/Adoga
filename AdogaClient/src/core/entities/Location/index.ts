interface ILocation {
  id: string;
  name: string;
}

export default class LocationEntities implements ILocation {
  name: string = "";
  id: string = "";

  constructor(data) {
    this.name = data?.name;
    this.id = data?.id;
  }
  public get Properties(): ILocation {
    return {
      name: this.name,
      id: this.id,
    };
  }
  static CreateList(listData) {
    return listData.map((x) => new LocationEntities(x));
  }
}
