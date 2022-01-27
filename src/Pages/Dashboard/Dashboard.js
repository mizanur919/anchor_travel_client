import React, { useEffect, useRef, useState } from 'react';
import './Dashboard.css'

const Dashboard = () => {
    const titleRef = useRef();
    const descriptionRef = useRef();
    const priceRef = useRef();
    const imgRef = useRef();
    const tourTypeRef = useRef();
    const durationRef = useRef();

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://haunted-phantom-42348.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    // Add Service
    const handleAddUser = (e) => {
        e.preventDefault();
        const title = titleRef.current.value;
        const description = descriptionRef.current.value;
        const price = priceRef.current.value;
        const img = imgRef.current.value;
        const tourType = tourTypeRef.current.value;
        const duration = durationRef.current.value;

        const newUser = { title, description, price, img, tourType, duration };
        fetch('https://haunted-phantom-42348.herokuapp.com/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Data added');
                    e.target.reset();
                }
            })
    }
    useEffect(() => {
        fetch('https://haunted-phantom-42348.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    // Handle Delete
    const handleDelete = id => {
        const url = `https://haunted-phantom-42348.herokuapp.com/services/${id}`;
        fetch(url, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert('deleted')
                    const remainingServices = services.filter(service => service._id !== id);
                    setServices(remainingServices);
                }
            })
    }
    return (
        <div className="container">
            <div className="row py-4">
                <div className="col-md-4">
                    <h2>Add A Tour Package</h2>
                    <form onSubmit={handleAddUser}>
                        <input type="text" ref={titleRef} placeholder="Tour Name" /><br /><br />
                        <textarea ref={descriptionRef} placeholder="Description" cols="30" rows="10"></textarea><br /><br />
                        <input type="text" ref={priceRef} placeholder="Price" /><br /><br />
                        <input type="text" ref={imgRef} placeholder="Location Image URL" /><br /><br />
                        <input type="text" ref={tourTypeRef} placeholder="Tour Type" /><br /><br />
                        <input type="text" ref={durationRef} placeholder="Duration" /><br /><br />
                        <input type="submit" value="Add" />
                    </form>

                </div>
                <div className="col-md-8">
                    <div className="data-table">
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>Tour Name</th>
                                    <th>Short Description</th>
                                    <th>Price</th>
                                    <th>Image</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    services.map(service => <tr
                                        key={service._id}
                                    >
                                        <td>{service.title}</td>
                                        <td>{service.description.slice(0, 100)}</td>
                                        <td>{service.price}</td>
                                        <td><img style={{ width: "100px", height: "auto" }} src={service.img} alt="" /></td>
                                        <td style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                            <button className="btn btn-info" style={{ marginRight: "5px" }}>Edit</button>
                                            <button className="btn btn-danger" onClick={() => handleDelete(service._id)} style={{ marginLeft: "5px" }}>Delete</button>
                                        </td>
                                    </tr>)
                                }
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;