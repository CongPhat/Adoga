import ProductEntities from "@entities/Product";
import RoomEntities from "@entities/Room";
import FacilitiesEntities from "@entities/Room/facilities";
import { atom } from "recoil";

interface IDropDownFacilitiesRoom {
  dataFacilities: Array<FacilitiesEntities>;
  isShow: boolean;
  refSeeAll: React.RefObject<HTMLElement>;
}

export const dropDownFacilitiesRoom = atom<IDropDownFacilitiesRoom>({
  key: "dropDownFacilitiesRoom",
  default: {
    dataFacilities: null,
    isShow: false,
    refSeeAll: null,
  },
});
