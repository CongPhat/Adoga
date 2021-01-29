import React from "react";
import { Link } from "react-router-dom";

const HeaderComponent = (props) => {
  return (
    <header className="py-4 px-8">
      <Link
        to={"/"}
        className="block"
        style={{ width: "89px", height: "37px" }}
      >
        <img src="https://cdn6.agoda.net/images/MVC/default/agoda-logo-v2.png" />
      </Link>
    </header>
  );
};

export default React.memo(HeaderComponent);
