import React from "react";
import "./Header.css";
import LiveTvIcon from "@mui/icons-material/LiveTv";

function Header() {
  return (
    <div className="header-bar">
      <div className="icon-name-con">
        <LiveTvIcon fontSize="large" />
        <p className="home-page-name">Free IPTV</p>
      </div>
      <div className="filter-type">
        <div className="filter-lang">Language</div>
        <div className="filter-coun">Country</div>
      </div>
    </div>
  );
}

export default Header;
