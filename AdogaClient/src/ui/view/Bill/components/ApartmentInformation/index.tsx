import ShowImagesRoom from "@components/commons/single/ShowImagesRoom";
import RatingComponent from "@components/commons/single/RatingComponent";
import BillEntities from "@entities/Bill";
import React from "react";
import { Link } from "react-router-dom";

interface IProps {
  dataBill: BillEntities;
}

const ApartmentInformation = ({ dataBill }: IProps) => {
  return (
    <div className="border border-gray-1100 shadow-x0 relative mt-8">
      <h6 className="bg-white-200 p-4 border-b border-gray-1100 text-base font-bold">
        Entire apartment information
      </h6>
      <div className="flex p-4">
        <div className="w-4/12 mr-4">
          <ShowImagesRoom images={dataBill.room.images} />
        </div>
        <div className="w-8/12">
          <div className="flex justify-between items-center">
            <Link
              className=" text-blue-500 text-xl font-bold hover:underline"
              to={`/product/${dataBill.product.productId}`}
            >
              {dataBill.room.name}
            </Link>
            <RatingComponent rating={dataBill.room.rating} />
          </div>
          <span className="block text-xs font-light">
            {dataBill.product.productStreet}
          </span>
          <ul className=" text-xs-1">
            <li className="flex mt-4">
              <span className="block w-2/12">Check in:</span>
              <p className="w-10/12 font-semibold">Sunday, February 7,2021</p>
            </li>
            <li className="flex mt-1">
              <span className="block w-2/12">Check in:</span>
              <p className="w-10/12 font-semibold">Sunday, February 7,2021</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default React.memo(ApartmentInformation);
