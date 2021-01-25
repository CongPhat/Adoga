import ProductEntities from "@entities/Product";
import RoomEntities from "@entities/Room";
import { atom } from "recoil";

interface IModalImagesProduct {
  dataProduct: ProductEntities;
  dataRoom: RoomEntities;
  type: "product" | "room" | "";
  isShow: boolean;
}

export const modalImagesProduct = atom<IModalImagesProduct>({
  key: "ModalImagesProduct",
  default: {
    dataProduct: null,
    dataRoom: null,
    type: "",
    isShow: false,
  },
});
