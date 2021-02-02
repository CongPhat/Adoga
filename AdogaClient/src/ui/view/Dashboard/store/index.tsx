import LocationEntities from "@entities/Location";
import { atom } from "recoil";

export interface ILocationTop {
  dataLocation: LocationEntities[];
}

export const locationTop = atom<ILocationTop>({
  key: "locationTop",
  default: {
    dataLocation: [],
  },
});
