import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <Carousel fade style={{ height: "650px" }}>
                <Carousel.Item>
                    <img height="650px"
                        className="d-block w-100"
                        src="https://i.ibb.co/Y8C5wLT/simon-english-48ner-ZQCHgo-unsplash-1.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Travel Here And There</h3>
                        <p>Satisfaction is one of our first Priority</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img height="650px"
                        className="d-block w-100"
                        src="https://i.ibb.co/XJwWLBj/iswanto-arif-u0l-Aovo-Usa-U-unsplash-1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Enjoy The Amazing Coral Beach</h3>
                        <p>Refresh Your Mind And  Nulla vitae elit libero.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img height="650px"
                        className="d-block w-100"
                        src="https://i.ibb.co/TqZGg3L/kal-visuals-Bt-J-Vv-C9-A-unsplash.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Natural Green Expand Your Joyous </h3>
                        <p>Get Touch  A Happy Tour With us</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    );
};

export default Banner;