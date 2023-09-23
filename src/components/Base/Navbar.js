import { Fragment } from "react";
import Logout from "../Authentication/Logout";
import AddDataButton from "./AddDataButton";

const Navbar = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="#">
            Mini Project
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <AddDataButton/>
              </li>
            </ul>
          </div>
        </div>
            <Logout/>
      </nav>
    </Fragment>
  );
};

export default Navbar;
