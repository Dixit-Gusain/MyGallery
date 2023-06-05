import React from "react";
import { Link } from "react-router-dom";
import Home from "./Home";
import Flower from "./Flower";
import Night from "./Night";
import Nature from "./Nature";
function NavBar() {
  return (
    <>
      <nav className="myheader">
        <div className="d-flex flex-row  flex-wrap">
          <h3 className="nav-header p-3">My Gallery</h3>
          <ul className="mynavbar-navigation p-3 mx-auto">
            <li>
              <Link to="/" element={<Home />}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/Flower" element={<Flower />}>
                Flower
              </Link>
            </li>
            <li>
              <Link to="/Nature" element={<Nature />}>
                Nature
              </Link>
            </li>
            <li>
              <Link to="/Night" element={<Night />}>
                Night View
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
