import React from "react";
import { Link, BrowserRouter } from "react-router-dom";

function TopNavItem({ itemName }) {
  return (
    <BrowserRouter>
      <div className="col-auto">
        <Link
          style={{ color: "white", fontWeight: 600, textDecoration: "none" }}
          to={itemName}
          reloadDocument={true}
        >
          {itemName}
        </Link>
      </div>
    </BrowserRouter>
  );
}

export default TopNavItem;
