import BenefitEntities from "@entities/Benefits";
import RatingEntities from "@entities/Rating";
import RoomEntities from "@entities/Room";

export interface IProduct {
  productId: string;
  locationId: string;
  productName: string;
  productPrice: string;
  productStreet: string;
  productStar: number;
  productImageThumbnail: string;
  productRating: number;
  productRatingDetail: Array<RatingEntities>;
  productDiscount: number;
  productBenefits: Array<BenefitEntities>;
  productImages: Array<{
    linkImage: string;
    title: string;
  }>;
  productOnly: number;
  productType: string;
  productRoom: RoomEntities;
  productAbout: string;
}

export default class ProductEntities implements IProduct {
  productId: string = "";
  productName: string = "";
  productPrice: string = "";
  productStreet: string = "";
  productStar: number = 0;
  locationId: string = "";
  productImageThumbnail: string = "";
  productImages: Array<{
    linkImage: string;
    title: string;
  }>;
  productRating: number = 0;
  productDiscount: number = 0;
  productBenefits: Array<BenefitEntities>;
  productOnly: number;
  productType: string;
  productRoom: RoomEntities;
  productAbout: string;
  productRatingDetail: Array<RatingEntities>;

  constructor(data) {
    this.productName = data?.name;
    this.productId = data?._id;
    this.productPrice = data?.price;
    this.productStreet = data?.street;
    this.productStar = data?.star;
    this.locationId = data?.locationId;
    this.productImageThumbnail = data?.imageThumbnail;
    this.productRating = data?.rating;
    this.productDiscount = data?.discount || this.productDiscount;
    this.productBenefits = this.setBenefits(data?.benefits || []);
    this.productImages = data?.images || [];
    this.productOnly = data?.only || 0;
    this.productType = data?.productType || "";
    this.productRoom = this.setOneRoom(data?.rooms ? data?.rooms[0] : []);
    this.productAbout = data?.productAbout || "";
    this.productRatingDetail = this.setRatingDetail(
      data?.productRatingDetail || []
    );
  }
  private setBenefits(listBenefit): Array<BenefitEntities> {
    return BenefitEntities.CreateList(listBenefit);
  }
  private setOneRoom(data): RoomEntities {
    return new RoomEntities(data);
  }
  private setRatingDetail(data): Array<RatingEntities> {
    return RatingEntities.CreateListRating(data);
  }
  public get Properties(): IProduct {
    return {
      productName: this.productName,
      productPrice: this.productPrice,
      productStreet: this.productStreet,
      productStar: this.productStar,
      locationId: this.locationId,
      productId: this.productId,
      productImageThumbnail: this.productImageThumbnail,
      productRating: this.productRating,
      productDiscount: this.productDiscount,
      productBenefits: this.productBenefits,
      productImages: this.productImages,
      productOnly: this.productOnly,
      productType: this.productType,
      productAbout: this.productAbout,
      productRoom: this.productRoom,
      productRatingDetail: this.productRatingDetail,
    };
  }
  static CreateList(listData) {
    return listData.map((x) => new ProductEntities(x));
  }
}
