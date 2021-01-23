import React from "react";
import { Button } from "antd";

const ButtonFilter = ({ children }) => {
  return (
    <Button
      className="py-1 px-2 rounded-3xl bg-blue-900 hover:bg-blue-600 text-sm"
      style={{ minWidth: "90px", maxWidth: "150px" }}
    >
      {children}
    </Button>
  );
};
export default React.memo(ButtonFilter);
