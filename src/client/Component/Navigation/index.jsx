
import { Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css'
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top shadow">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/dashboard">
          Wellness Portal
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink
                className="nav-link text-white fw-bold"
                style={{ fontSize: "16px" }}
                to="/dashboard"
              >
                Dashboard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link text-white fw-bold"
                style={{ fontSize: "16px" }}
                to="/goals"
              >
                Goals
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link text-white fw-bold"
                style={{ fontSize: "16px" }}
                to="/trackgoals"
              >
                Reports
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link text-white fw-bold"
                style={{ fontSize: "16px" }}
                to="/profile"
              >
                Profile
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
