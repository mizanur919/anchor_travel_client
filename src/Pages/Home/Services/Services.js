import React, { useEffect, useState } from "react";
import "./Services.css";
import SingleService from "../SingleService/SingleService";
import useAuth from "../../../contexts/useAuth";
import { Link } from "react-router-dom";

const Services = () => {
  // const {services, totalServices} = useAuth();
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <>
      <div className="p-5" id="services">
        <div className="container">
          <h2 className="text-center mb-5">Shared Experiences</h2>
          <div className="row row-cols-1 row-cols-md-4 g-4">
            {services.map((service) => (
              <div key={service.id}>
                <Link
                  to={`/servicedetailsView/${service._id}`}
                  className="text-dark"
                  style={{ textDecoration: "none" }}
                >
                  <div className="col">
                    <div className="card pt-2 pe-3 ps-3 pb-2">
                      <div className="d-flex align-items-center">
                        <div className="">
                          <img
                            src={service.userPhoto}
                            className="card-img-top"
                            style={{
                              width: "100px",
                              height: "100px",
                              borderRadius: "50%",
                            }}
                            alt=""
                          />
                          <p className="pt-2 fw-bold">{service.user}</p>
                        </div>
                        <div className="card-body">
                          <h5
                            className="card-title text-center"
                            style={{ fontSize: "50px" }}
                          >
                            {service.rating} / 5
                          </h5>
                          <div className="text-center">
                            <p>
                              <i
                                className="far fa-money-bill-alt"
                                sytle={{ color: "#192a56" }}
                              ></i>
                              &nbsp; $ {service.expense}
                            </p>
                            <p>
                              <i
                                className="fas fa-map-marker-alt"
                                sytle={{ color: "#192a56" }}
                              ></i>
                              &nbsp;
                              {service.location}
                            </p>
                            <p>
                              <i
                                className="fas fa-map-marker-alt"
                                sytle={{ color: "#192a56" }}
                              ></i>
                              &nbsp;
                              {service.date}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
