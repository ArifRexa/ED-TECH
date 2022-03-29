import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import "./ServicesData.css"

const ServicesData = (props) => {
    const {name, instructor, urlthumb, instructors_Qualifications, description, pricing, rating, paricipant} = props.course
    
    return (
        <div>
            <Col>
                <Card className="d-flex shadow-lg card-size">
                    <Card.Img className="img-size rounded-3 p-3 text-warning" variant="top" src={urlthumb} />
                    <Card.Body>
                        <Card.Title className='text-bold mb-3'>{name}</Card.Title>
                        <div className="d-flex justify-content-between my-1">

                            <h6>Instructor: {instructor}</h6>
                            <h6>{instructors_Qualifications}</h6>
                        </div>
                        <h6>Price: $ {pricing}</h6>
                        <div className="d-flex my-1">
                            {rating}

                            <div style={{ "margin-left": "10px", "margin-right": "10px" }} className='my-1'>

                                {/* <Rating
                                    initialRating={rating}
                                    emptySymbol="far fa-star"
                                    fullSymbol="fas fa-star"
                                    readonly>

                                </Rating> */}
                            </div >
                            ({paricipant})
                        </div>
                        <Card.Text className='my-1'>
                            {description}
                        </Card.Text>
                        <Button variant="primary" className='my-2'>Enroll Now</Button>
                    </Card.Body>
                </Card>
            </Col>
            
        </div>
    );
};

export default ServicesData;