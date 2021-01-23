import ProductEntities from "@entities/Product";
import RoomEntities from "@entities/Room";
import { atom } from "recoil";

interface IModalImagesProduct {
  data: ProductEntities;
  type: "product" | "room" | "";
  isShow: boolean;
}

export const modalImagesProduct = atom<IModalImagesProduct>({
  key: "ModalImagesProduct",
  default: {
    data: null,
    type: "",
    isShow: false,
  },
});
