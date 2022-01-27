import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./AllBlogs.css";

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="container my-4">
      <h2 className="text-center py-4">All Blogs</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {blogs.map((blog) => (
          <div className="col" key={blog._id}>
            <Link
              to={`/blogView/${blog._id}`}
              className="text-dark"
              style={{ textDecoration: "none" }}
            >
              <div className="card">
                <img src={blog.img} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{blog.title}</h5>
                  <p className="card-text">
                    {blog.description.substring(0, 150)}
                  </p>
                  <div className="d-flex justify-content-around">
                    <p>
                      <i
                        className="far fa-money-bill-alt"
                        sytle={{ color: "#192a56" }}
                      ></i>
                      &nbsp; $ {blog.cost}
                    </p>
                    <p>
                      <i
                        className="fas fa-map-marker-alt"
                        sytle={{ color: "#192a56" }}
                      ></i>
                      &nbsp;
                      {blog.location}{" "}
                    </p>
                  </div>
                  <div className="d-flex justify-content-around">
                    <p>
                      <i
                        class="fas fa-columns"
                        sytle={{ color: "#192a56" }}
                      ></i>
                      &nbsp; {blog.category}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
        {/* <div className="col">
            <div className="card">
              <img
                src="https://i.ibb.co/N27RLGZ/halima-bouchouicha-9-GMW0u-Trh-Ic-unsplash.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">
                  status as a former dominion of the English Crown
                </h5>
                <p className="card-text">
                  {" "}
                  The South Atlantic region of the United States. Virginia is
                  nicknamed the ``Old Dominion`` due to its status as a former
                  dominion of the English Crown, and ``Mother of Presidents`` due
                  to the most U.S. presidents having been born there. The
                  geography and climate of the Commonwealth are shaped by the Blue
                  Ridge Mountains and the Chesapeake Bay, which provide habitat
                  for much of its flora and fauna. The capital of the Commonwealth
                  is Richmond; Virginia Beach is the most populous city.
                </p>
              </div>
            </div>
          </div> */}
      </div>
    </div>
  );
};

export default AllBlogs;
