import FilterBar from "@components/commons/feature/FilterBar";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import HeaderComponent from "./Header";
import SiderComponent from "./Sidebar";

const DefaultLayout = (props) => {
  const [toogleSider, setToogleSider] = useState(false);

  const toggle = () => {
    setToogleSider(!toogleSider);
  };

  return (
    <section className="default-layout flex h-full">
      {/* <SiderComponent toogleSider={toogleSider} /> */}
      <div className="site-layout width-area ml-auto">
        {/* <HeaderComponent toggle={toggle} toogleSider={toogleSider} /> */}
        <FilterBar />
        <div className={`main-content-wrapper overflow-x-hidden`}>
          <div className={`wrap-content w-3/5 m-auto`}>{props.children}</div>
        </div>
      </div>
    </section>
  );
};

export default DefaultLayout;
