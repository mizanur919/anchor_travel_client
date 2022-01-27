import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../../../src/contexts/useAuth";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/blogs/${serviceId}`;
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
            <h6>Expenses: ${service?.cost}</h6>
            <h6>Location: {service?.location}</h6>
            <br />
            <div className="bg-dark text-white p-4 rounded">
              <h4>Traveler Info</h4>
              <p>{service.travelerInfo}</p>
            </div>
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
