import React from "react";
import { Redirect } from "react-router";
import * as Loadable from "react-loadable";
import LoadingComponent from "@components/commons/LoadingComponent";

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
export const Product = Loadable({
  loader: () => import("@view/Product"),
  loading: LoadingComponent,
});
export const Payment = Loadable({
  loader: () => import("@view/Payment"),
  loading: LoadingComponent,
});
export const Bill = Loadable({
  loader: () => import("@view/Bill"),
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
    path: "/product/:productId",
    exact: true,
    main: () => <Product />,
  },
  {
    path: "/payment/:roomId/:roomTotal",
    exact: true,
    main: () => <Payment />,
  },
  {
    path: "/bill/:billId",
    exact: true,
    main: () => <Bill />,
  },
  {
    path: "",
    exact: true,
    main: () => <PageNotFound />,
  },
];
