import { parseMoneyVND, priceDiscount } from "@helper/functions";
import React from "react";
interface IProps {
  discount: number;
  price: number;
  className?: string;
  classTextDiscount?: string;
  classTextPrice?: string;
}

const PriceDiscountComponent = ({
  discount,
  price,
  className,
  classTextDiscount,
  classTextPrice,
}: IProps) => {
  return (
    <div className={`text-xl font-semibold ${className}`}>
      {discount !== 0 && (
        <span
          className={`text-sm-em relative font-medium text-gray-1200 ${classTextDiscount}`}
        >
          {parseMoneyVND(price)}
          <span
            className="absolute w-full h-2px bg-red-1100 left-0 top-1/2"
            style={{ transform: "skew(46deg, 160deg)" }}
          ></span>
        </span>
      )}
      <span className="block">
        <span className="underline text-xs-em">đ</span>
        <span className={`text-base-em text-red-1100 ${classTextPrice}`}>
          {parseMoneyVND(priceDiscount(price, discount))}
        </span>
      </span>
    </div>
  );
};
export default React.memo(PriceDiscountComponent);
