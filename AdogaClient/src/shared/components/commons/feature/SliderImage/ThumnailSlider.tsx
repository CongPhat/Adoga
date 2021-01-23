import React from "react";
interface Iprops {
  item: {
    linkImage: string;
    title: string;
    type?: number;
  };
  index: number;
  handleChangeThumnail: (index: number) => void;
  isActive: boolean;
}
const ThumnailSlider = ({
  item,
  index,
  handleChangeThumnail,
  isActive,
}: Iprops) => {
  return (
    <div
      className={`mx-2 cursor-pointer`}
      style={{
        width: "35px",
        height: "35px",
        bottom: "20px",
      }}
    >
      <img
        src={item.linkImage}
        alt=""
        onClick={() => handleChangeThumnail(index)}
        className="object-cover w-full h-full rounded-md "
        style={{
          border: isActive ? "2px solid white" : null,
          opacity: isActive ? 1 : 0.5,
        }}
      />
    </div>
  );
};
export default React.memo(ThumnailSlider);
