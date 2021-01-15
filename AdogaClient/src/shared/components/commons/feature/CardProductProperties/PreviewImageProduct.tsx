import React, { useMemo, useState } from "react";
interface Image {
  linkImage: string;
  title: string;
}
interface IProps {
  images: Array<Image>;
}
const PriviewImageProduct = ({ images }: IProps) => {
  const [imageHover, setImageHover] = useState<Image>(null);
  const imageRender = useMemo(() => {
    if (images.length > 10) return images.splice(0, 10);
    return images;
  }, []);

  return (
    <div>
      <img src={images[0]?.linkImage} alt="" />
      <div className=" mt-1 relative">
        <div
          onMouseLeave={() => setImageHover(null)}
          className="grid grid-cols-5 gap-1"
          style={{ height: "84px" }}
        >
          {imageRender.map((item, index) => (
            <div
              className=" h-10 w-full relative"
              onMouseEnter={() => setImageHover(item)}
              key={index + Math.random()}
            >
              <img
                src={item.linkImage}
                alt=""
                className="w-full h-full relative z-10"
              />
              {index == 9 && (
                <div className="absolute z-20 w-full h-full top-0 left-0 bg-black text-xs text-white opacity-75 flex items-center justify-center">
                  <span>See all</span>
                </div>
              )}
            </div>
          ))}
        </div>
        {imageHover && (
          <div
            className="absolute w-170% h-64 z-60 shadow-x1"
            style={{ top: "-308.5%" }}
          >
            <img
              src={imageHover.linkImage}
              alt=""
              className="w-full h-full object-cover"
            />
            <span
              className="absolute bottom-0 text-white z-10"
              style={{ left: "10px" }}
            >
              {imageHover.title}
            </span>
            <div className="absolute w-full h-32 bottom-0 bg-gradient-to-t from-black"></div>
          </div>
        )}
      </div>
    </div>
  );
};
export default React.memo(PriviewImageProduct);
