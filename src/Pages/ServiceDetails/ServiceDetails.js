import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState({});
  useEffect(() => {
    const url = `https://haunted-phantom-42348.herokuapp.com/services/${serviceId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <div className="service-details" style={{ minHeight: "500px" }}>
      <div className="container">
        <div className="row py-4">
          <div className="col-md-6">
            <h3>{service?.title}</h3>
            <p>{service?.description}</p>
            <h5>Fee: ${service?.price}</h5>
            <Link
              to={`/placeOrder/${service._id}`}
              className="btn btn-info text-dark"
            >
              <i className="fas fa-cart-plus"></i> Book Now
            </Link>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img className="rounded w-75" src={service?.img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
