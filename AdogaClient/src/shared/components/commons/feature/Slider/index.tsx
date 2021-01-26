import LocationEntities from "@entities/Location";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LeftOutlined } from "@ant-design/icons";
import "./style.scss";

interface IPropsSlider {
  listItem: Array<LocationEntities>;
}

const Slider = ({ listItem }: IPropsSlider) => {
  const arrRefGallery = listItem.map((x) => ({
    item: x,
    ref: useRef(null),
  }));
  const [indexCurrent, setIndexCurrent] = useState(0);
  const handleClick = (isPrev) => {
    const indexTo = isPrev ? indexCurrent - 3 : indexCurrent + 3;
    if (indexTo <= arrRefGallery.length) {
      arrRefGallery[indexTo].ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setIndexCurrent(indexTo);
    }
  };

  return (
    <div className="relative">
      <ul className="gallery ">
        {arrRefGallery.map((x, y) => (
          <li ref={x.ref}>
            <Link to={`/location/${x.item.id}`}>
              <div className="h-4/5 w-4/5 ">
                <img
                  src={x.item.image}
                  alt=""
                  className="h-full w-full rounded-full transform hover:scale-105 transition duration-150"
                />
                <h1 className="text-base text-center font-bold mt-3 mb-1">
                  {x.item.name}
                </h1>
                <span className=" text-xs text-center block text-gray-1200">
                  {x.item.accommodations} accommodations
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      {indexCurrent > 0 && (
        <FontAwesomeIcon
          icon={faAngleLeft}
          onClick={() => handleClick(true)}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer text-black bg-white-100 text-xl rounded-full w-10 h-10 shadow-x1"
        />
      )}
      {indexCurrent <= arrRefGallery.length - 4 && (
        <FontAwesomeIcon
          icon={faAngleRight}
          onClick={() => handleClick(false)}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer text-black bg-white-100 text-xl rounded-full w-10 h-10 shadow-x1"
        />
      )}
    </div>
  );
};
export default React.memo(Slider);
