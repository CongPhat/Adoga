import AmenitiesEntities from "@entities/Room/Amenities";
import React from "react";
interface IItemAmenities {
  amenities: AmenitiesEntities;
}

const ItemAmenities = ({ amenities }: IItemAmenities) => {
  return (
    <li className="text-xs">
      <i className={`${amenities.icon}`}></i>
      <span className="ml-2 text-grey-300">{amenities.name}</span>
    </li>
  );
};
export default React.memo(ItemAmenities);
