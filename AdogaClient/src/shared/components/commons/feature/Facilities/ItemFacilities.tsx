import FacilitiesEntities from "@entities/Room/facilities";
import React from "react";
import ItemAmenities from "./ItemAmenities";
interface IItemFacilities {
  facilities: FacilitiesEntities;
}
const ItemFacilities = ({ facilities }: IItemFacilities) => {
  return (
    <div className="mb-4">
      <p className="text-grey-300 font-semibold text-sm">{facilities.name}</p>
      <ul className="grid grid-cols-2 gap-2 mt-1">
        {facilities.amenities.map((item, index) => (
          <ItemAmenities amenities={item} key={index} />
        ))}
      </ul>
    </div>
  );
};
export default React.memo(ItemFacilities);
