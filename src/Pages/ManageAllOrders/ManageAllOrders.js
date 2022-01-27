import React, { useEffect, useState } from 'react';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://haunted-phantom-42348.herokuapp.com/cart')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])

    return (
        <div className="container my-4">
            <div className="data-table">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Tour Name</th>
                            <th>Price</th>
                            <th>Email</th>
                            <th>Order Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(single => <tr
                                key={single._id}
                            >
                                <td>{single.title}</td>
                                <td>{single.price}</td>
                                <td>{single.email}</td>
                                <td>{single.status}</td>
                                <td style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <button className="btn btn-info text-white">Edit</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default ManageAllOrders;