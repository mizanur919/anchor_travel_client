import React, { useEffect, useRef, useState } from "react";
import "./Blogs.css";

const Blogs = () => {
  const tourCategory = [
    "Business Travel",
    "Solo Travel",
    "Travel With Friends",
    "Family Travel",
    "Travel With Group",
    "Luxury Travel",
    "Adventure Travel",
  ];
  const titleRef = useRef();
  const descriptionRef = useRef();
  const costRef = useRef();
  const imgRef = useRef();
  const categoryRef = useRef();
  const travelerInfoRef = useRef();
  const locationRef = useRef();

  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/blogs")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  // Add Service
  const handleAddUser = (e) => {
    e.preventDefault();
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const cost = costRef.current.value;
    const img = imgRef.current.value;
    const category = categoryRef.current.value;
    const travelerInfo = travelerInfoRef.current.value;
    const location = locationRef.current.value;

    const newUser = {
      title,
      description,
      cost,
      img,
      category,
      travelerInfo,
      location,
    };
    fetch("http://localhost:5000/blogs", {
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
          fetch("http://localhost:5000/blogs")
            .then((res) => res.json())
            .then((data) => setServices(data));
        }
      });
  };
  useEffect(() => {
    fetch("http://localhost:5000/blogs")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  // Handle Delete
  const handleDelete = (id) => {
    const url = `http://localhost:5000/blogs/${id}`;
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
          <h2>Add New Blog Post</h2>
          <form onSubmit={handleAddUser}>
            <input type="text" ref={titleRef} placeholder="Title" />
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
            <input type="text" ref={costRef} placeholder="Cost" />
            <br />
            <br />
            <input type="text" ref={imgRef} placeholder="Location Image URL" />
            <br />
            <br />
            <input type="text" ref={categoryRef} placeholder="Category" />
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
            <input
              type="text"
              ref={travelerInfoRef}
              placeholder="About yourself"
            />
            <br />
            <br />
            <input type="text" ref={locationRef} placeholder="Location" />
            <br />
            <br />
            <input type="submit" value="Add" />
          </form>
        </div>
        <div className="col-md-8">
          <div className="data-table">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Cost</th>
                  <th>Category</th>
                  <th>Image</th>
                  <th>Location</th>
                </tr>
              </thead>
              <tbody>
                {services.map((service) => (
                  <tr key={service._id}>
                    <td>{service.title}</td>
                    <td>{service.description.slice(0, 100)}</td>
                    <td>{service.cost}</td>
                    <td>{service.category}</td>
                    <td>
                      <img
                        style={{ width: "100px", height: "auto" }}
                        src={service.img}
                        alt=""
                      />
                    </td>
                    <td>{service.location}</td>
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

export default Blogs;
