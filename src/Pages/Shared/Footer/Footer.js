import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <>
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 footer-logo">
                            <NavLink to="/home" activeStyle={{ color: "#ffffff" }}><span className="text-white text-uppercase fw-bold">The Traveler</span></NavLink >
                            <p style={{ padding: "10px 30px 0 0", textAlign: "justify", fontSize: "14px" }}>Travel is the movement of people between distant geographical locations. Travel can be done by foot, bicycle, automobile, train, boat, bus, airplane, ship or other means, with or without luggage, and can be one way or round trip.</p>
                        </div>
                        <div className="col-md-4 footer-menu-left d-flex justify-content-center">
                            <ul className="nav flex-column text-left">
                                <li className="nav-item">
                                    <a className="nav-link active" href="#">Why Choose Us?</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Get Coupons</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Your Opinions</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4 footer-menu-right d-flex justify-content-center">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">FAQs</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Happy Clients</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p className="text-center">Copyright &copy; 2021 <span className="fw-bold">The Traveler</span></p>
            </div>
        </>
    );
};

export default Footer;