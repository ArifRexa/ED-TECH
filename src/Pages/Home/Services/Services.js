import React, { useEffect, useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ServicesData from './ServicesData';

const Services = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch("./course.json")
        .then(res => res.json())
        .then(data => setCourses(data.slice(0, 5)))

    }, [])

    const navigate = useNavigate();
    const allServices = () => {
        navigate("/service")
    }
    return (
        <div>
            <h1 className='my-5 fw-bold text-center'>OUR SERVICES</h1>
            <Container>
                <Row xs={1} md={3} className="g-4">
                    {
                        courses.map(course => <ServicesData course={course}></ServicesData>)
                    }

                </Row>
                <Button className='my-4 fw-bold' onClick={allServices}>SEE MORE</Button>
            </Container>
            
        </div>
    );
};

export default Services;