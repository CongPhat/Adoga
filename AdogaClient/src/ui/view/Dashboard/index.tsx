import InfiniteScrollLazyLoad from "@components/commons/effect/InfiniteScrollLazyLoadComponent";
import SearchComponent from "@components/commons/feature/Search";
import Slider from "@components/commons/feature/Slider";
import React, { useEffect } from "react";
import FeaturedHomes from "./components/FeaturedHomes";

const Recommended = React.lazy(() => import("./components/Recommended"));
const TopDestionations = React.lazy(
  () => import("./components/TopDestinations")
);

const Dashboard = ({}) => {
  return (
    <div className="dashboard relative">
      <div
        className="absolute h-350 w-screen top-0 -left-1/2"
        style={{ transform: "translateX(9%)" }}
      >
        <img
          className="w-full h-full object-cover"
          src="https://cdn6.agoda.net/images/MVC/default/background_image/illustrations/bg-agoda-homepage.png"
          alt=""
        />
      </div>
      <div className=" pt-56">
        <SearchComponent />
        <FeaturedHomes />
        <InfiniteScrollLazyLoad delay={1}>
          <Recommended />
        </InfiniteScrollLazyLoad>
        <InfiniteScrollLazyLoad delay={300}>
          <TopDestionations />
        </InfiniteScrollLazyLoad>
      </div>
    </div>
  );
};
export default Dashboard;
