import BillEntities from "@entities/Bill";
import { atom } from "recoil";

export interface IDetailBill {
  data: BillEntities;
}

export const detailBill = atom<IDetailBill>({
  key: "detailBill",
  default: {
    data: null,
  },
});
