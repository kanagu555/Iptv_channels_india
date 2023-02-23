import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header-bar">
      <div>Logo/ICON</div>
      <div className="filter-type">
        <div className="filter-lang">Language</div>
        <div className="filter-coun">Country</div>
      </div>
    </div>
  );
}

export default Header;
