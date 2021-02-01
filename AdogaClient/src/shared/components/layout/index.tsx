import FilterBar from "@components/commons/feature/FilterBar";
import React, { useState } from "react";
import SearchComponent from "@components/commons/feature/Search";
import HeaderComponent from "./Header";

const DefaultLayout = (props) => {
  return (
    <section className="default-layout flex h-full">
      {/* <SiderComponent toogleSider={toogleSider} /> */}
      <div className="site-layout width-area ml-auto">
        <HeaderComponent />
        <SearchComponent />
        <FilterBar />
        <div className={`main-content-wrapper`}>
          <div className={`wrap-content w-3/5 m-auto`}>{props.children}</div>
        </div>
      </div>
    </section>
  );
};

export default DefaultLayout;
