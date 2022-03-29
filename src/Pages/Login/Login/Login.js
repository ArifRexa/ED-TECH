import React, { useState } from 'react';
import { Container, FloatingLabel, Form, Button, Alert, Spinner } from 'react-bootstrap';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import "./Login.css"

const Login = () => {

    const [loginData, setLoginData] = useState({})

    const { user, googleSignIn, loginUser, isLoading, error } = useAuth()


    const location = useLocation();
    const history = useNavigate();
    const redirectUri = location.state?.from || "/"

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value
        setLoginData(newLoginData);
    }




    const handleSubmit = (e) => {
        loginUser(loginData.email, loginData.password, location, history);
        alert("submited")

        e.preventDefault()

    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                history(redirectUri)
            })
    }
    return (
        <div>
            <h1 className="fw-bold my-5 text-center">Please Log in</h1>

            <Container className="w-50">
                {<form onSubmit={handleSubmit}>
                    <FloatingLabel

                        label="Email address"
                        className="mb-3"
                    >
                        <Form.Control name="email" onChange={handleOnChange} type="email" placeholder="name@example.com" required />
                    </FloatingLabel>
                    <FloatingLabel label="Password">
                        <Form.Control name="password" onChange={handleOnChange} type="password" placeholder="Password" required />
                    </FloatingLabel>
                    <Button type="submit" className="mt-3">Log in</Button>
                    <NavLink style={{ textDecoration: "dotted", display: "block" }} to="/register">
                        <Button className="p-0 mt-2 link-style primary" variant="link">New User? Please Register.</Button>
                    </NavLink>
                </form>}
                {
                    isLoading && <Spinner animation="border" variant="info" />

                }
                {
                    user?.email && <Alert variant="success">
                        Login successfull !
                    </Alert>
                }

                {
                    error && <Alert variant="danger">
                        {error}
                    </Alert>

                }


                <Button onClick={handleGoogleSignIn} title="Google sign in"> <i className="fab fa-google"></i> Google Sign in</Button>
            </Container>

        </div>
    );
};

export default Login;