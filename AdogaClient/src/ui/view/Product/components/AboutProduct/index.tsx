import React from "react";
import ProductEntities from "@entities/Product";
import RatingComponent from "@components/commons/single/RatingComponent";
import SkeletonComponent from "@components/commons/single/SkeletonComponent";
import EffectImageComponent from "@components/commons/single/EffectImageComponent";
interface IAboutProduct {
  dataProduct: ProductEntities;
  loading?: boolean;
}
interface IProcessRating {
  name: string;
  number: number;
}

const convertNumberProcess = (number: number) => {
  if (number > 10) return 100;
  return number * 10;
};

const ItemProcessRating = ({ name, number }: IProcessRating) => {
  return (
    <li className="flex items-center justify-between mb-3 text-xs-1">
      <p className=" w-4/12 mr-2 text-black">{name}</p>
      <div
        className="w-7/12 relative rounded-lg bg-gray-1100 overflow-hidden"
        style={{ height: "7px" }}
      >
        <div
          className=" bg-blue-600 h-full absolute left-0"
          style={{ width: `${convertNumberProcess(number)}%` }}
        ></div>
      </div>
      <p className="w-1/12 ml-2 text-blue-600 font-semibold">{number}</p>
    </li>
  );
};

const AboutProduct = ({ dataProduct, loading = true }: IAboutProduct) => {
  if (!dataProduct) return null;

  const {
    productImages,
    productName,
    productAbout,
    productRatingDetail,
    productRating,
  } = dataProduct;

  return (
    <div className=" mt-16">
      <div className="flex">
        <div className="w-2/6 mr-4 border border-gray-1100 rounded-md p-4 place-self-start">
          <span className="block mb-4 text-black text-sm">Overall rating:</span>
          {loading ? (
            <SkeletonComponent loading={loading} rowsSkeleton={4} />
          ) : (
            <>
              <RatingComponent rating={productRating} className=" text-lg" />
              <ul className="mt-4">
                {productRatingDetail.map((item, index) => (
                  <ItemProcessRating
                    key={index}
                    name={item.ratingName}
                    number={item.ratingNumber}
                  />
                ))}
              </ul>
            </>
          )}
        </div>
        <div className=" w-4/6 border border-gray-1100 rounded-md p-4">
          <div className="relative">
            <div className=" h-270px">
              {productImages.length > 1 && (
                <>
                  {loading ? (
                    <EffectImageComponent />
                  ) : (
                    <img
                      src={productImages[0].linkImage}
                      alt={productImages[0].linkImage}
                      className="object-cover"
                    />
                  )}
                </>
              )}
            </div>
            <div
              className="absolute bottom-0 text-white-100 py-4 px-6"
              style={{ backgroundColor: "rgba(0,0,0,0.5)", minWidth: "50%" }}
            >
              <p className="text-base">More about</p>
              <h1 className=" text-white-100 text-2xl font-semibold">
                {productName}
              </h1>
            </div>
          </div>
          {loading ? (
            <SkeletonComponent loading={loading} rowsSkeleton={4} />
          ) : (
            <div
              dangerouslySetInnerHTML={{ __html: productAbout }}
              className="mt-4 text-black"
            ></div>
          )}
        </div>
      </div>
    </div>
  );
};
export default React.memo(AboutProduct);
