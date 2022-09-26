import React from "react";

function TopNavItem({ itemName }) {
  return (
    <div className="col-auto" style={{ color: "white", fontWeight: 600 }}>
      {itemName}
    </div>
  );
}

export default TopNavItem;
