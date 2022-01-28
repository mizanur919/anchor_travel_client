import React from "react";
import { Container, Nav, Navbar, Button, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../contexts/useAuth";
import { HashLink } from "react-router-hash-link";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <Navbar
        className="header-nav text-white"
        variant="light"
        sticky="top"
        expand="lg"
      >
        <Container>
          <Navbar.Brand as={HashLink} to="/home" className="brand">
            <span className="text-white text-uppercase fw-bold">
              Anchor Travel
            </span>
          </Navbar.Brand>

          <Navbar.Toggle className="bg-white" aria-controls="navbarScroll" />

          <Navbar.Collapse id="navbarScroll" className="justify-content-end">
            <Nav
              className="mr-auto my-2 my-lg-0 my-nav d-flex  align-items-center"
              style={{ color: "white" }}
              navbarScroll
            >
              <Nav.Link as={HashLink} to="/home">
                <span className="text-white">Home</span>
              </Nav.Link>
              <Nav.Link as={HashLink} to="/allBlogs">
                <span className="text-white">Blogs</span>
              </Nav.Link>
              <Nav.Link as={HashLink} to="/allReviews">
                <span className="text-white">Reviews</span>
              </Nav.Link>
              {user.email ? (
                <>
                  <Link to="/adminPanel">
                    <Button variant="info btn-sm">
                      <span className="text-white">Share Experience</span>
                    </Button>
                  </Link>
                  &nbsp; &nbsp;
                  <Link to="/adminPanel">
                    <Button variant="info btn-sm">
                      <span className="text-white">Create a post</span>
                    </Button>
                  </Link>
                  <NavDropdown
                    className="user-dropdown"
                    title={
                      <img
                        style={{
                          width: "35px",
                          borderRadius: "50%",
                        }}
                        src={user.photoURL}
                        alt=""
                      />
                    }
                  >
                    <div className="text-center">
                      <h6>{user.displayName}</h6>
                      <Link to="/adminPanel">
                        <Button variant="success">
                          <span className="text-white">Dashboard</span>
                        </Button>
                      </Link>
                      <br />
                      <br />
                      <Link to="/home">
                        <Button onClick={logOut} variant="info">
                          <span className="text-white">LogOut</span>
                        </Button>
                      </Link>
                    </div>
                  </NavDropdown>
                </>
              ) : (
                <div>
                  <Link to="/adminPanel">
                    <Button variant="info btn-sm">
                      <span className="text-white">Create a post</span>
                    </Button>
                  </Link>
                  &nbsp; &nbsp;
                  <Link to="/adminPanel">
                    <Button variant="info btn-sm">
                      <span className="text-white">Share Experience</span>
                    </Button>
                  </Link>
                </div>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
