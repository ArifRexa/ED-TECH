import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ServicesData from './ServicesData';

const Services = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch("./course.json")
        .then(res => res.json())
        .then(data => setCourses(data))

    }, [])
    return (
        <div>
            <h1 className='my-5 fw-bold text-center'>OUR SERVICES</h1>
            <Container>
                <Row xs={1} md={3} className="g-4">
                    {
                        courses.map(course => <ServicesData course={course}></ServicesData>)
                    }

                </Row>
            </Container>
            
        </div>
    );
};

export default Services;