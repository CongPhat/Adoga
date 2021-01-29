import React, { Suspense, useEffect } from "react";
import { Form, DatePicker } from "antd";
import { useForm } from "antd/lib/form/Form";
import { useSingleAsync } from "@hook/useAsync";
import LocationEntities from "@entities/Location";
import LocationRepositoryImpl from "@useCases/Location";
import { useHistory, useLocation } from "react-router";

const SearchDashboard = React.lazy(() => import("./SearchDashboard"));
const SearchMain = React.lazy(() => import("./SearchMain"));

const { RangePicker } = DatePicker;

const SearchComponent = ({}) => {
  const history = useHistory();
  const location = useLocation();
  const asyncGetTopLocation = useSingleAsync<Array<LocationEntities>>(
    new LocationRepositoryImpl().GetLocationTop
  );
  useEffect(() => {
    asyncGetTopLocation.execute();
    if (localStorage.getItem("LOCAL_SEARCH")) {
      form.setFieldsValue({
        location: localStorage.getItem("LOCAL_SEARCH"),
      });
    }
  }, []);

  useEffect(() => {
    console.log(location.pathname);
  }, [location.pathname]);
  const [form] = useForm();
  const handleFinishSearch = (values) => {
    localStorage.setItem("LOCAL_SEARCH", values.location);
    history.push(`/all-product?location=${values.location}`);
  };

  const { pathname } = location;

  return (
    <Form
      className={`form-search ${
        pathname == "/" ? "form-search-dashboard" : "form-search-main"
      }`}
      form={form}
      onFinish={handleFinishSearch}
    >
      <Suspense fallback="">
        {pathname == "/" ? (
          <SearchDashboard
            dataLocation={asyncGetTopLocation.value}
            form={form}
          />
        ) : (
          <SearchMain dataLocation={asyncGetTopLocation.value} form={form} />
        )}
      </Suspense>
    </Form>
  );
};
export default React.memo(SearchComponent);
