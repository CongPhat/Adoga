import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { modalImagesProduct } from "@view/Product/store";
import { Modal } from "antd";
import SliderImage from "@components/commons/feature/SliderImage";
import ContentModalProduct from "../ContentModalProduct";

interface IModalShowImages {}
const ModalShowImages = ({}: IModalShowImages) => {
  const [modal, setModal] = useRecoilState(modalImagesProduct);
  return (
    <>
      <Modal
        title={null}
        visible={modal.isShow}
        className="modal-show-image w-85vw h-65vh bg-black"
        // onOk={handleOk
        onCancel={() =>
          setModal({
            isShow: false,
            data: null,
            type: "",
          })
        }
        footer={null}
      >
        {modal.data && (
          <div className="flex">
            <div className=" w-3/4 h-65vh">
              <SliderImage media={modal.data.images} />
            </div>
            <div className="w-1/4 h-65vh px-4">
              <ContentModalProduct />
            </div>
          </div>
        )}
      </Modal>
    </>
  );
};
export default React.memo(ModalShowImages);
