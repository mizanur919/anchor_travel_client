import React, { useEffect, useState } from 'react';
import './Services.css';
import SingleService from '../SingleService/SingleService'
import useAuth from '../../../contexts/useAuth';

const Services = () => {
    // const {services, totalServices} = useAuth();
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://haunted-phantom-42348.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="p-5" id="services">
            <div className="container">
                <h2 className="text-center mb-5">Our Services Total</h2>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        services.map(service => <SingleService
                            key={service.id}
                            service={service}
                        ></SingleService>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;