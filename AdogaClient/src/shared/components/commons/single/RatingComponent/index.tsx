import { Divider } from "antd";
import React from "react";
interface IProps {
  rating: number;
  isRevert?: boolean;
  className?: string;
  classText?: string;
}

const classifyRating = (rating) => {
  if (rating > 8) return "Excellent";
  if (rating >= 7 && rating <= 8) return "Good";
  return "Average";
};

const RatingComponent = ({
  rating,
  isRevert,
  className = "",
  classText = "",
}: IProps) => {
  return (
    <div className={`flex items-center ${className}`}>
      <span className={`block mr-2 text-black ${classText}`}>
        {classifyRating(rating)}
      </span>
      <span
        className={`border-2 ${
          isRevert
            ? "bg-white-100 text-blue-600 border-blue-600"
            : "bg-blue-600 text-white-100 border-blue-600"
        } px-2 py-1 rounded-md `}
      >
        {rating}
      </span>
    </div>
  );
};
export default React.memo(RatingComponent);
