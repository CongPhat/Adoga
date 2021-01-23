import { PATH_NAME_FILTER } from "@config/index";
import React from "react";
import { useLocation } from "react-router";
import FilterPrice from "./FilterPrice";
import FilterStar from "./FilterStar";

const PrivateFilter = (Component) => {
  return () => {
    const location = useLocation();
    return (
      <>
        {PATH_NAME_FILTER.find((x) => x == location.pathname) ? (
          <Component />
        ) : null}
      </>
    );
  };
};

const FilterBar = ({}) => {
  return (
    <div className="header-product relative py-6 shadow-lg ">
      <div className="w-3/5 m-auto flex items-center">
        <p className="mr-4 font-semibold">Filter</p>
        <FilterPrice />
        <FilterStar />
      </div>
    </div>
  );
};
export default React.memo(PrivateFilter(FilterBar));
