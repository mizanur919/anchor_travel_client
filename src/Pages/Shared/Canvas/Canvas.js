import React, { useEffect, useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";

const Canvas = () => {
  const [services, setServices] = useState([]);
  const filteredData = services.filter((singleData) => singleData.rating > 4);
  console.log(filteredData);
  useEffect(() => {
    fetch("https://evening-cliffs-29156.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow}
        style={{
          position: "fixed",
          right: "0",
          top: "220px",
          zIndex: "9999",
          color: "#ffffff",
          backgroundColor: "#192a56",
          border: "none",
          fontWeight: "bold",
        }}
      >
        <i class="fas fa-fighter-jet" style={{ fontSize: "35px" }}></i>
        <br />
        Top <br /> Rated Spots
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Top Rate Spots</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="row row-cols-1 row-cols-md-1 g-4">
            {filteredData.map((service) => (
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
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Canvas;
