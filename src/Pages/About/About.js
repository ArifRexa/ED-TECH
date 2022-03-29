import React from 'react';
import { Card, Col, CardGroup, Row, Container } from 'react-bootstrap';
import img1 from "../../authorImg/arif.jpg";
import img2 from "../../authorImg/rafiun.jpg";
import img3 from "../../authorImg/shuvo.jpg";
import img4 from "../../authorImg/robi.jpg";
import img5 from "../../authorImg/saleh.jpg";
import "./About.css"

const About = () => {
    return (
        <div>
            <h1 className="text-center my-5 fw-bold p-5">ABOUT KBO-TECH</h1>
            {/* <CardGroup> */}
            <Container>
                <Row xs={1} md={3} className="g-4 auth-img-size fw-bold">
                    <Col>

                        <Card.Img variant="top" src={img1} />
                        <Card.Body className="text-center mt-4">
                            <Card.Title>Arif Rexa</Card.Title>
                            <Card.Text>
                                Founder and CEO
                            </Card.Text>
                        </Card.Body>

                    </Col>
                    <Col>

                        <Card.Img variant="top" src={img2} />
                        <Card.Body className="text-center mt-4">
                            <Card.Title>Rafiun Israt</Card.Title>
                            <Card.Text>
                                Advisor and Network Engineer
                            </Card.Text>
                        </Card.Body>

                    </Col>
                    <Col>

                        <Card.Img variant="top" src={img3} />
                        <Card.Body className="text-center mt-4">
                            <Card.Title>Ahmed Shuvo</Card.Title>
                            <Card.Text>
                                Web Developer
                            </Card.Text>
                        </Card.Body>

                    </Col>
                    <Col>

                        <Card.Img variant="top" src={img4} />
                        <Card.Body className="text-center mt-4">
                            <Card.Title>Md Robi</Card.Title>
                            <Card.Text>
                                Java Developer and Manager
                            </Card.Text>
                        </Card.Body>

                    </Col>
                    <Col>

                        <Card.Img variant="top" src={img5} />
                        <Card.Body className="text-center mt-4">
                            <Card.Title>Fahim Saleh</Card.Title>
                            <Card.Text>
                                Data Analyst
                            </Card.Text>
                        </Card.Body>

                    </Col>

                </Row>
            </Container>
            {/* </CardGroup> */}

        </div>
    );
};

export default About;