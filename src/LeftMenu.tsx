import "./LeftMenu.css";
import {Link} from "react-router-dom";
import { Routes } from "./Router";

export function LeftMenu() {
  return (
    <div className="wrapper-left-menu">
      <Link to={Routes.home} className="home">
        Home
      </Link>
      <Link to={Routes.reviews} className="reviews">
        Reviews
      </Link>
      <div className="wrapper-new-releases">
        <div>
          <div className="new-releases">New Releases</div>
          <div className="new-releases-items"><div></div>Last 30 days</div>
          <div className="new-releases-items"><div></div>This week</div>
          <div className="new-releases-items"><div></div>Next week</div>
          <div className="new-releases-items"><div></div>Release calendar</div>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
