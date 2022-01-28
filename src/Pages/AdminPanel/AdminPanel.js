import React from "react";
import "./AdminPanel.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import useAuth from "../../contexts/useAuth";
import AdminPanelHome from "./AdminPanelHome/AdminPanelHome";
import Dashboard from "../Dashboard/Dashboard";
import Blogs from "../Dashboard/Blogs/Blogs";
import Reviews from "../Dashboard/Reviews/Reviews";
import MakeAdmin from "./MakeAdmin/MakeAdmin";

// var el = document.getElementById("wrapper");
// var toggleButton = document.getElementById("menu-toggle");

// toggleButton.onclick = function () {
//     el.classList.toggle("toggled");
// };

const AdminPanel = () => {
  let { path, url } = useRouteMatch();
  const { user, logOut, admin } = useAuth();

  return (
    <div className="d-flex" id="wrapper">
      {/* Sidebar */}
      <div className="bg-white" id="sidebar-wrapper">
        <div className="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom">
          <i className="fas fa-user-secret me-2"></i>Best Watch Point
        </div>
        <div className="list-group list-group-flush my-3">
          {/* <Link href="#" className="list-group-item list-group-item-action bg-transparent second-text active"><i
                        className="fas fa-tachometer-alt me-2"></i>Dashboard</Link> */}

          <Link
            to="/"
            className="list-group-item list-group-item-action bg-transparent second-text fw-bold"
          >
            <i className="fas fa-home"></i> Home
          </Link>

          <Link
            to={`${url}`}
            className="list-group-item list-group-item-action bg-transparent second-text fw-bold"
          >
            <i className="fas fa-tachometer-alt"></i> Dashboard
          </Link>

          {!admin && (
            <>
              <Link
                to={`${url}/addBlog`}
                className="list-group-item list-group-item-action bg-transparent second-text fw-bold"
              >
                <i className="fas fa-cart-arrow-down"></i> Add Blog
              </Link>

              <Link
                to={`${url}/addReview`}
                className="list-group-item list-group-item-action bg-transparent second-text fw-bold"
              >
                <i className="fab fa-amazon-pay"></i> Add Review
              </Link>
              <Link
                to={`${url}/makeAdmin`}
                className="list-group-item list-group-item-action bg-transparent second-text fw-bold"
              >
                <i className="fas fa-users"></i> Make Admin
              </Link>

              <Link
                to={`${url}/myReviews`}
                className="list-group-item list-group-item-action bg-transparent second-text fw-bold"
              >
                <i className="fas fa-search-location"></i> My Reviews
              </Link>
            </>
          )}

          {admin && (
            <>
              <Link
                to={`${url}/makeAdmin`}
                className="list-group-item list-group-item-action bg-transparent second-text fw-bold"
              >
                <i className="fas fa-users"></i> Make Admin
              </Link>
            </>
          )}

          <Link
            to="/home"
            className="list-group-item list-group-item-action bg-transparent text-danger fw-bold"
          >
            <i className="fas fa-power-off me-2"></i>
            <span onClick={logOut}>Logout</span>
          </Link>
        </div>
      </div>
      {/* sidebar-wrapper */}

      {/* Page Content */}
      <div id="page-content-wrapper">
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4">
          <div className="d-flex align-items-center">
            <i
              className="fas fa-align-left primary-text fs-4 me-3"
              id="menu-toggle"
            ></i>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <li>
                  <i className="fas fa-user me-2"></i> {user.displayName}
                </li>
                {/* <Link className="nav-link dropdown-toggle second-text fw-bold" href="#" id="navbarDropdown"
                                    role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="fas fa-user me-2"></i>John Doe
                                </Link> */}
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" href="#">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Settings
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Logout
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>

        {/* Content Goes Here */}
        <div className="container-fluid px-4">
          <div className="row g-3">
            <Switch>
              <Route exact path={path}>
                <AdminPanelHome></AdminPanelHome>
              </Route>
              <Route path={`${path}/addBlog`}>
                <Blogs></Blogs>
              </Route>
              <Route path={`${path}/addReview`}>
                <Reviews></Reviews>
              </Route>
              <Route path={`${path}/makeAdmin`}>
                <MakeAdmin></MakeAdmin>
              </Route>
              {/*
              <Route path={`${path}/manageOrders`}>
                <ManageAllOrders></ManageAllOrders>
              </Route>
              <Route path={`${path}/myReviews`}>
                <ReviewCRUD></ReviewCRUD>
              </Route>
              <Route path={`${path}/payment`}>
                <Payment></Payment>
              </Route> */}
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
