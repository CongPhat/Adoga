import LoadingPrivateComponent from "@components/commons/effect/LoadingPrivateComponent";
import LocationEntities from "@entities/Location";
import { parseSearchToObject } from "@helper/functions";
import { useSingleAsync } from "@hook/useAsync";
import LocationRepositoryImpl from "@useCases/Location";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import ErrorLocation from "./components/ErrorLocation";

const PrivateLocation = (Component) => {
  return () => {
    const [privateLocation, setPrivateLocation] = useState(false);
    const asyncGetAllProduct = useSingleAsync<LocationEntities>(
      new LocationRepositoryImpl().GetDetailLocation
    );
    const { status } = asyncGetAllProduct;
    const location = useLocation();

    useEffect(() => {
      const searchData = parseSearchToObject(location.search);
      asyncGetAllProduct
        .execute(searchData.location || "")
        .then(() => {
          setPrivateLocation(true);
        })
        .catch(() => {
          setPrivateLocation(false);
        });
    }, []);

    if (status == "loading") {
      return <LoadingPrivateComponent />;
    }

    if (status == "error") {
      return <ErrorLocation />;
    }

    return <>{privateLocation && <Component />}</>;
  };
};
export default PrivateLocation;
