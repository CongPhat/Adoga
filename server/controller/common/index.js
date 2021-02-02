const BenefitModel = require("../../models/Benefits");
const FacilitiesModel = require("../../models/Facilities");
const AmenitiesModel = require("../../models/Amenities");

class CommonController {
  static async setBenefits(data) {
    const result = await Promise.all(
      data.benefits.map(async (item) => {
        const benefitFind = await BenefitModel.findOne({ _id: item });
        return benefitFind;
      })
    );
    return result;
  }

  static async setFacilities(facilities) {
    const result = await Promise.all(
      facilities.map(async (item) => {
        const facilitiesFind = await FacilitiesModel.findOne({ _id: item });
        return facilitiesFind;
      })
    );
    return result;
  }

  static async setAmenities(amenities) {
    const result = await Promise.all(
      amenities.map(async (item) => {
        const amenitiesFind = await AmenitiesModel.findOne({ _id: item });
        return amenitiesFind;
      })
    );
    return result;
  }
}

module.exports = CommonController;
