import React from "react";
import { Redirect } from "react-router";
import * as Loadable from "react-loadable";
import LoadingComponent from "@components/commons/LoadingComponent/loadingComponent";

export const PageNotFound = Loadable({
  loader: () => import("@view/PageNotFound"),
  loading: LoadingComponent,
});

export const Dashboard = Loadable({
  loader: () => import("@view/Dashboard"),
  loading: LoadingComponent,
});
export const AllProduct = Loadable({
  loader: () => import("@view/AllProduct"),
  loading: LoadingComponent,
});

export const publicRouter: Array<object> = [
  {
    path: "/",
    exact: true,
    main: () => <Dashboard />,
  },
  {
    path: "/all-product",
    exact: true,
    main: () => <AllProduct />,
  },
  {
    path: "",
    exact: true,
    main: () => <PageNotFound />,
  },
];
