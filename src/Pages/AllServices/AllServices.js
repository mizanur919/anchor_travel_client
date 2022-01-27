import React, { useState } from 'react';
import useAuth from '../../contexts/useAuth';
import SingleService from '../Home/SingleService/SingleService';
import './AllServices.css'

const AllServices = () => {
    const { services, totalServices, totalPages, currentPage, setCurrentPage } = useAuth();
    const pageHander = num => {
        setCurrentPage(num);
    }
    console.log(currentPage);
    return (
        <div className="p-5" id="services">
            <div className="container">
                <h2>All Pages {totalPages}</h2>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        services.map(service => <SingleService
                            key={service._id}
                            service={service}
                        ></SingleService>)
                    }
                </div>
                <div className="d-flex justify-content-center pt-4 pb-4">
                    {
                        [...Array(totalPages).keys()].map(number => <button
                            onClick={() => pageHander(number)}
                            key={number}
                            className={
                                number === currentPage ? 'btn btn-primary rounded-0 border' : 'btn btn-white rounded-0 border'
                            }
                        >{number + 1}</button>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllServices;