import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="container-fluid px-3">
      <div className="row">
        <div className="col-12 bg-primary  d-flex justify-content-between ">
          <ul className="d-flex gap-5 align-items-center m-0 p-0 py-3">
            <NavLink
              to="/"
              className="list-unstyled p-0 pointer text-light text-decoration-none"
            >
              HOME
            </NavLink>
            <li className="list-unstyled p-0 pointer text-light">ABOUT</li>
            <li className="list-unstyled p-0 pointer text-light">CONTACT</li>
          </ul>
          <ul className="d-flex gap-5 align-items-center m-0">
            <NavLink
              to="/cart"
              className="list-unstyled p-0 pointer text-light"
            >
              <i className="fa-solid fa-cart-shopping fs-5"></i>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
