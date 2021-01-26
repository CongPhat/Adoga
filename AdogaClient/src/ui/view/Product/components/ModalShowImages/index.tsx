import React, { Suspense } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { modalImagesProduct } from "@view/Product/store";
import { Modal } from "antd";
import SliderImage from "@components/commons/feature/SliderImage";

const ContentModalProduct = React.lazy(() => import("../ContentModalProduct"));
const ContentModalRoom = React.lazy(() => import("../ContentModalRoom"));

interface IModalShowImages {}
const ModalShowImages = ({}: IModalShowImages) => {
  const [modal, setModal] = useRecoilState(modalImagesProduct);

  return (
    <>
      <Modal
        title={null}
        visible={modal.isShow}
        className={`modal-show-image w-85vw h-65vh bg-black ${
          modal.type == "room" ? "modal-show-image-room" : ""
        }`}
        // onOk={handleOk
        onCancel={() =>
          setModal({
            isShow: false,
            dataProduct: null,
            dataRoom: null,
            type: "",
          })
        }
        footer={null}
      >
        {(modal.dataProduct || modal.dataRoom) && (
          <div className="flex">
            <div className=" w-3/4 h-65vh">
              <SliderImage
                media={
                  modal.type == "product"
                    ? modal.dataProduct.productImages
                    : modal.dataRoom.images
                }
              />
            </div>
            <div className="w-1/4 h-65vh">
              <Suspense fallback="">
                {modal.type == "product" ? (
                  <ContentModalProduct />
                ) : (
                  <ContentModalRoom />
                )}
              </Suspense>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
};
export default React.memo(ModalShowImages);
