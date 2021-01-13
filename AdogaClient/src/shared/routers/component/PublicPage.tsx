import DefaultLayout from "@components/layout";
import React from "react";
import { publicRouter } from "../publicRouter";
import ShowRouter from "./ShowRouter";

interface Props {}

const PublicPage: React.FC<Props> = ({}) => {
  return (
    <DefaultLayout>
      <ShowRouter routers={publicRouter} />
    </DefaultLayout>
  );
};

export default PublicPage;
