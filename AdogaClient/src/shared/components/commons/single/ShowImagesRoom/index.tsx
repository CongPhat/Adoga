import React from "react";

interface IShowImagesRoom {
  images: Array<{
    linkImage: string;
    title: string;
  }>;
}

const ShowImagesRoom = ({ images }: IShowImagesRoom) => {
  return (
    <>
      {images && (
        <div>
          {images.length >= 1 && (
            <div className="mb-1 h-120">
              <img src={images[0].linkImage} alt={images[0].title} />
            </div>
          )}
          <div
            className={`grid grid-cols-${
              images.length >= 3 ? "2" : "1"
            } gap-1 h-60`}
          >
            {images.length >= 2 && (
              <div className="h-inherit">
                <img src={images[1].linkImage} alt={images[1].title} />
              </div>
            )}
            {images.length >= 3 && (
              <div className="h-inherit">
                <img src={images[2].linkImage} alt={images[2].title} />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
export default React.memo(ShowImagesRoom);
