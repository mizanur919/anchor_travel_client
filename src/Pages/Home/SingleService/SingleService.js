import React from 'react';
import './SingleService.css'
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../../contexts/useAuth'

const SingleService = ({ service }) => {
    const { user, addToCart } = useAuth();
    const { _id, title, description, price, img, tourType, duration, groupSize } = service;
    const history = useHistory();
    return (
        <div className="col">
            <div className="card h-100 pb-3">
                <img src={img} className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description.slice(0, 100)}</p>
                </div>
                <div className="d-flex justify-content-around">
                    <Link to={`/servicedetailsView/${_id}`} className="btn btn-info text-dark">View Details</Link>
                    <Link className="btn btn-info text-dark"><i class="far fa-heart"></i> Favorite</Link>
                    {/* <button onClick={() => {
                        user.uid
                            ?
                            addToCart(service)
                            :
                            history.push('/login');
                    }}>Book Now</button> */}
                </div>
            </div>
        </div>
    );
};

export default SingleService;