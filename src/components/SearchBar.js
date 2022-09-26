import React from "react";
import TopNavItem from "./TopNav/TopNavItem";
import BrandName from "./TopNav/BrandName";
import SearchInput from "./TopNav/SearchInput";

function Header() {
  return (
    <div className="row px-5 justify-content-start align-items-center searchBarComp py-3 shadow">
      <BrandName />
      <SearchInput />
      <TopNavItem itemName={"Catergory"} />
      <TopNavItem itemName={"Sell Here"} />
      <TopNavItem itemName={"Cart"} />
    </div>
  );
}

export default Header;
