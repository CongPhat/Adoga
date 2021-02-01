import React from "react";
import { Link } from "react-router-dom";

const logo = require("@assets/images/logo.png");

const HeaderComponent = (props) => {
  return (
    <header className="py-4 px-8">
      <Link
        to={"/"}
        className="block"
        style={{ width: "89px", height: "31px" }}
      >
        <img src={logo} />
      </Link>
    </header>
  );
};

export default React.memo(HeaderComponent);
