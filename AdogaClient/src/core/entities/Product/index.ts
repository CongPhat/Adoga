import BenefitEntities from "@entities/Benefits";

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
  benefits: Array<BenefitEntities>;
  images: Array<{
    linkImage: string;
    title: string;
  }>;
  only: number;
  productType: string;
}

export default class ProductEntities implements IProduct {
  id: string = "";
  name: string = "";
  price: number = 0;
  street: string = "";
  star: number = 0;
  locationId: string = "";
  imageThumbnail: string = "";
  images: Array<{
    linkImage: string;
    title: string;
  }>;
  rating: number = 0;
  discount: number = 0;
  benefits: Array<BenefitEntities>;
  only: number;
  productType: string;

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
    this.benefits = this.setBenefits(data?.benefits || []);
    this.images = data?.images || [];
    this.only = data?.only || 0;
    this.productType = data?.productType || "";
  }
  private setBenefits(listBenefit): Array<BenefitEntities> {
    return BenefitEntities.CreateList(listBenefit);
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
      benefits: this.benefits,
      images: this.images,
      only: this.only,
      productType: this.productType,
    };
  }
  static CreateList(listData) {
    return listData.map((x) => new ProductEntities(x));
  }
}
