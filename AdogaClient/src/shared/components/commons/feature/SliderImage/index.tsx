import React, { useCallback, useEffect } from "react";
import useSlider from "./useSlider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import ThumnailSlider from "./ThumnailSlider";
interface Iprops {
  media: Array<{
    linkImage: string;
    title: string;
    type?: number;
  }>;
}
const SliderImage = ({ media = [] }: Iprops) => {
  const slider = useSlider(media.length);
  const handleChange = useCallback((index) => {
    slider.setIndexSlider(index);
  }, []);

  return (
    <div className="slider w-full h-full relative overflow-hidden">
      <button
        onClick={() => slider.setSlider("prev")}
        className="absolute z-30 top-1/2 bg-white-100 rounded-full w-12 h-12 shadow-product"
        style={{ right: "2%" }}
      >
        <FontAwesomeIcon
          icon={faChevronRight}
          className=" text-2xl absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        />
      </button>
      <div
        className="h-full  absolute top-0 w-full z-10 bg-center bg-no-repeat bg-cover"
        style={{
          background: `url(${media[slider.current]?.linkImage})`,
          filter: "blur(15px)",
        }}
      ></div>
      <div className="flex items-center justify-center flex-col relative z-20 h-full">
        <img
          src={media[slider.current]?.linkImage}
          className="object-scale-down"
          style={{ height: "84%" }}
        />
        <div className="flex absolute" style={{ bottom: "5px" }}>
          {media.map((item, index) => (
            <ThumnailSlider
              item={item}
              key={index}
              index={index}
              handleChangeThumnail={handleChange}
              isActive={slider.current == index}
            />
          ))}
        </div>
      </div>
      <button
        onClick={() => slider.setSlider("next")}
        className="absolute z-30 top-1/2 bg-white-100 rounded-full w-12 h-12 shadow-product"
        style={{ left: "2%" }}
      >
        <FontAwesomeIcon
          icon={faChevronLeft}
          className=" text-2xl absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        />
      </button>
    </div>
  );
};
export default React.memo(SliderImage);
