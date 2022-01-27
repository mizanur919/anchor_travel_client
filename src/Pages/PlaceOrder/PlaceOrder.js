import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../contexts/useAuth';

const PlaceOrder = () => {
    const location = useLocation();
    const getId = location.pathname.split('/').pop();
    const { user, services, totalServices } = useAuth();
    const [service, setService] = useState({});
    const [selectedService, setSelectedService] = useState([]);

    useEffect(() => {
        const url = `https://haunted-phantom-42348.herokuapp.com/services/${getId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    //Add to cart

    const addressRef = useRef();
    const phoneRef = useRef();

    const addToCart = service => {
        const isAvailable = selectedService.find(selected => selected._id === service._id);

        const address = addressRef.current.value;
        const phone = phoneRef.current.value;

        delete service._id;
        service.uid = user.uid;
        service.status = 'pending';
        service.address = address;
        service.phone = phone;

        if (isAvailable) {
            alert('Already added this item on cart.');
        }
        else {
            fetch('https://haunted-phantom-42348.herokuapp.com/cart/add', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(service)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        const newSelection = [...selectedService, service];
                        setSelectedService(newSelection)
                    }
                })
        }
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-8">
                    <img className="rounded w-75" src={service?.img} alt="" />
                    <h3>{service?.title}</h3>
                    <p className="w-75">{service?.description}</p>
                    <h5>Fee: ${service?.price}</h5>
                </div>
                <div className="col-md-4">
                    <form>
                        <input type="text" value={user.displayName} placeholder="" /><br /><br />
                        <input type="text" value={user.email} placeholder="" /><br /><br />
                        <input type="text" ref={addressRef} placeholder="Address" /><br /><br />
                        <input type="text" ref={phoneRef} placeholder="Phone" /><br /><br />
                    </form>
                    <Link to={'/placeOrder'} onClick={() => addToCart(service)} className="btn btn-info text-dark"><i className="fas fa-cart-plus"></i> Place Order</Link>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;