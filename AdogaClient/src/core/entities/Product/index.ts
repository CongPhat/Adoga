export interface IProduct {
  id: string;
  locationId: string;
  name: string;
  price: number;
  street: string;
  star: number;
  imageThumbnail: string;
  rating: number;
  discount: number;
}

export default class ProductEntities implements IProduct {
  id: string = "";
  name: string = "";
  price: number = 0;
  street: string = "";
  star: number = 0;
  locationId: string = "";
  imageThumbnail: string = "";
  rating: number = 0;
  discount: number = 0;

  constructor(data) {
    this.name = data?.name;
    this.id = data?.id;
    this.price = data?.price;
    this.street = data?.street;
    this.star = data?.star;
    this.locationId = data?.locationId;
    this.imageThumbnail = data?.imageThumbnail;
    this.rating = data?.rating;
    this.discount = data?.discount || this.discount;
  }
  public get Properties(): IProduct {
    return {
      name: this.name,
      price: this.price,
      street: this.street,
      star: this.star,
      locationId: this.locationId,
      id: this.id,
      imageThumbnail: this.imageThumbnail,
      rating: this.rating,
      discount: this.discount,
    };
  }
  static CreateList(listData) {
    return listData.map((x) => new ProductEntities(x));
  }
}
