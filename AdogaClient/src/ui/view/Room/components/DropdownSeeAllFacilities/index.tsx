import ItemFacilities from "@components/commons/feature/Facilities/ItemFacilities";
import { dropDownFacilitiesRoom } from "@view/Room/store";
import React, { useRef } from "react";
import ReactDOM from "react-dom";
import { useRecoilValue } from "recoil";

interface IProps {}

const getOffsetTop = (top) => {
  if (top < 250) return top;
  if (top >= 250 && top < 600) return top - top / 2;
  if (top >= 600) {
    return top - top / 1.5;
  }
};

const DropdownSeeAllFacilities = ({}: IProps) => {
  const dropDownFacilities = useRecoilValue(dropDownFacilitiesRoom);
  if (
    !dropDownFacilities.isShow ||
    !dropDownFacilities.dataFacilities ||
    !dropDownFacilities.dataFacilities
  )
    return null;

  const {
    top,
    left,
    width,
    height,
  } = dropDownFacilities.refSeeAll.current.getBoundingClientRect();
  const { dataFacilities } = dropDownFacilities;

  return ReactDOM.createPortal(
    <div
      style={{
        top: getOffsetTop(top),
        left: left + width,
      }}
      className="fixed bg-white-100 shadow-x1 z-60"
    >
      <div className="p-4 h-full grid grid-cols-2 gap-8">
        {dataFacilities.map((item, index) => (
          <ItemFacilities facilities={item} key={index} />
        ))}
      </div>
    </div>,
    document.getElementById("body-root")
  );
};
export default React.memo(DropdownSeeAllFacilities);
