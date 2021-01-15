export interface IBenefit {
  id: string;
  name: string;
}

export default class BenefitEntities implements IBenefit {
  id: string = "";
  name: string = "";

  constructor(data) {
    this.name = data?.name;
    this.id = data?.id;
  }
  public get Properties(): IBenefit {
    return {
      name: this.name,
      id: this.id,
    };
  }
  static CreateList(listData) {
    return listData.map((x) => new BenefitEntities(x));
  }
}
