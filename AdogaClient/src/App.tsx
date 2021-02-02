import PrivateLogin from "@hoc//PrivateLogin";
import PublicPage from "@routers/component/PublicPage";
import React, { Suspense } from "react";
import { Switch } from "react-router-dom";

interface Iprops {
  privateLogin?: boolean;
}

const App = ({}: Iprops) => {
  return (
    <Switch>
      <Suspense fallback={<div></div>}>
        <PublicPage />
      </Suspense>
    </Switch>
  );
};

export default App;
