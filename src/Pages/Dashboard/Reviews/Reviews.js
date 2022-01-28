import React, { useRef, useState, useEffect } from "react";
import "./Reviews.css";
import useAuth from "../../../contexts/useAuth";

const Reviews = () => {
  const { user } = useAuth();
  const dateRef = useRef();
  const locationRef = useRef();
  const costRef = useRef();
  const ratingRef = useRef();
  const descriptionRef = useRef();
  const imgRef = useRef();

  const [services, setServices] = useState([]);

  // View all reviews
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  // Add Service
  const handleAddUser = (e) => {
    e.preventDefault();
    const date = dateRef.current.value;
    const location = locationRef.current.value;
    const expense = costRef.current.value;
    const rating = ratingRef.current.value;
    const shortDescription = descriptionRef.current.value;
    const image = imgRef.current.value;

    const newUser = {
      date: new Date(date).toLocaleDateString(),
      location,
      expense,
      rating,
      shortDescription,
      image,
      user: user.displayName,
      uid: user.uid,
      userPhoto: user.photoURL,
    };
    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Data added");
          e.target.reset();
          fetch("http://localhost:5000/reviews")
            .then((res) => res.json())
            .then((data) => setServices(data));
        }
      });
  };

  // Handle Delete
  const handleDelete = (id) => {
    const url = `http://localhost:5000/reviews/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          alert("deleted");
          const remainingServices = services.filter(
            (service) => service._id !== id
          );
          setServices(remainingServices);
        }
      });
  };
  return (
    <div className="container">
      <div className="row py-4">
        <div className="col-md-4">
          <h2>Share Your Experience</h2>
          <form onSubmit={handleAddUser}>
            <input type="date" ref={dateRef} />
            <br />
            <br />
            <input type="text" ref={locationRef} placeholder="Location" />
            <br />
            <br />
            <input type="text" ref={costRef} placeholder="Cost" />
            <br />
            <br />
            <input type="text" ref={ratingRef} placeholder="Rating" />
            <br />
            <br />
            <textarea
              ref={descriptionRef}
              placeholder="Description"
              cols="30"
              rows="10"
            ></textarea>
            <br />
            <br />
            <input type="text" ref={imgRef} placeholder="Location Image URL" />
            <br />
            <br />
            {/* <select>
              {tourCategory.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
            <br />
            <br /> */}
            <input type="submit" value="Add" />
          </form>
        </div>
        <div className="col-md-8">
          <div className="data-table">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Location</th>
                  <th>Cost</th>
                  <th>Image</th>
                </tr>
              </thead>
              <tbody>
                {services.map((service) => (
                  <tr key={service._id}>
                    <td>{service.date}</td>
                    <td>{service.location}</td>
                    <td>{service.expense}</td>
                    <td>
                      <img
                        style={{ width: "100px", height: "auto" }}
                        src={service.image}
                        alt=""
                      />
                    </td>
                    <td
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <button
                        className="btn btn-info"
                        style={{ marginRight: "5px" }}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(service._id)}
                        style={{ marginLeft: "5px" }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
