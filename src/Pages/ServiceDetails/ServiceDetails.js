import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/reviews/${serviceId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <div className="service-details" style={{ minHeight: "500px" }}>
      <div className="container">
        <div className="row py-4">
          <div className="col-md-6">
            <h3>Location: {service?.location}</h3>
            <p>{service?.shortDescription}</p>
            <h5>Expense: ${service?.expense}</h5>
            <h3 style={{ fontSize: "24px" }}>Rating: {service?.rating} / 5</h3>
            <p style={{ fontSize: "24px" }}>Date: {service?.date}</p>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img className="rounded w-75" src={service?.image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
