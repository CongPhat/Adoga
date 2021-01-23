import React from "react";
import { useSetRecoilState } from "recoil";
import { modalImagesProduct } from "../store";
interface IImagesPreviewProduct {
  images: Array<{
    linkImage: string;
    title: string;
  }>;
  showImagesProduct?: () => void;
}

const OverlayImage = () => {
  return (
    <div className="w-full h-full absolute top-0 bg-black opacity-0 group-hover:opacity-50 transition duration-150 z-20"></div>
  );
};

const ImagesPreview = ({
  images,
  showImagesProduct,
}: IImagesPreviewProduct) => {
  return (
    <div>
      <div
        className={`grid grid-cols-${
          images.length > 1 ? "2" : "1"
        } gap-2 h-350 rounded-lg overflow-hidden w-full`}
      >
        <div
          className="h-350 relative group cursor-pointer"
          onClick={showImagesProduct}
        >
          <img
            src={images[0].linkImage}
            alt={images[0].title}
            className="w-full h-full object-cover"
          />
          <OverlayImage />
        </div>
        {images.length > 1 && (
          <div className="h-350">
            <div
              className="mb-2 relative group cursor-pointer"
              onClick={showImagesProduct}
              style={{
                height:
                  images.length > 2
                    ? images.length > 3
                      ? "68%"
                      : "48%"
                    : "100%",
              }}
            >
              <img
                src={images[1].linkImage}
                alt={images[1].title}
                className="w-full h-full object-cover"
              />
              <OverlayImage />
            </div>
            {images.length > 2 && (
              <div
                className={`grid grid-cols-${images.length > 3 ? 2 : 1} gap-2`}
                style={{ height: images.length > 4 ? "30%" : "50%" }}
              >
                <div
                  style={{ height: "81%" }}
                  className="relative group cursor-pointer"
                  onClick={showImagesProduct}
                >
                  <img
                    src={images[2].linkImage}
                    alt={images[2].title}
                    className="w-full h-full object-cover"
                  />
                  <OverlayImage />
                </div>
                {images.length > 3 && (
                  <div
                    style={{ height: "81%" }}
                    className="relative group cursor-pointer"
                    onClick={showImagesProduct}
                  >
                    <img
                      src={images[3].linkImage}
                      alt={images[3].title}
                      className="w-full h-full object-cover"
                    />
                    {images.length > 3 && (
                      <div className="absolute w-full h-full top-0 z-10 flex justify-center items-center bg-black bg-opacity-50 ">
                        <span className="text-xs font-semibold text-white">
                          SEE ALL {images.length - 3} PHOTOS
                        </span>
                      </div>
                    )}
                    <OverlayImage />
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
export default React.memo(ImagesPreview);
