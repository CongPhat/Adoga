export interface IRating {
  ratingId: string;
  ratingName: string;
  ratingNumber: number;
}

export default class RatingEntities implements IRating {
  ratingId: string;
  ratingName: string;
  ratingNumber: number;

  constructor(data) {
    this.ratingName = data?.ratingName;
    this.ratingId = data?._id;
    this.ratingNumber = data?.ratingNumber;
  }
  static CreateListRating(listRating) {
    return listRating.map((x) => new RatingEntities(x));
  }
  public get Properties(): IRating {
    return {
      ratingName: this.ratingName,
      ratingNumber: this.ratingNumber,
      ratingId: this.ratingId,
    };
  }
}
