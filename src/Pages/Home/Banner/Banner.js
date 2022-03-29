import { Carousel } from 'react-bootstrap';
import React from 'react';
import img1 from '../../../images/p1.jpg'
import img2 from '../../../images/p10.png'
import img3 from '../../../images/p4.jpg'
import img4 from '../../../images/p5.png'
import img5 from '../../../images/p6.webp'
import img6 from '../../../images/p7.jpg'
import "./Banner.css"

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <div className="img-sizing">

                        <img
                            className="d-block w-100"
                            src={img1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Python Basic To Advance</h3>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
                <Carousel.Item interval={500}>

                    <div className="img-sizing">

                        <img
                            className="d-block w-100"
                            src={img6}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>MySql Crash Course</h3>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="img-sizing">

                        <img
                            className="d-block w-100"
                            src={img3}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>C++ With Object Oriened</h3>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="img-sizing">

                        <img
                            className="d-block w-100"
                            src={img4}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>JavaScript For Web Development</h3>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="img-sizing">

                        <img
                            className="d-block w-100"
                            src={img5}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Ethical Hacking Crash Course</h3>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="img-sizing">

                        <img
                            className="d-block w-100"
                            src={img2}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>PHP Basic To Advance</h3>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
            </Carousel>
            
        </div>
    );
};

export default Banner;