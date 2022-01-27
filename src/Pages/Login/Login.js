import { getAuth, signInWithEmailAndPassword } from '@firebase/auth';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../contexts/useAuth';
import './Login.css'


const Login = () => {
    const { signInUsingGoogle, setIsLoading } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || "/home";

    // Get and set email and password data using useState 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Login With Google
    const handleLogInWithGoogle = () => {
        setIsLoading(true);
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
            .finally(() => setIsLoading(false));
    }

    // Login with email and password

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    // Login Function 
    const handleLogInEmailAndPassword = (e) => {
        e.preventDefault();
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                history.push(redirect_uri);
            })
            .catch(error => {
                alert(error.message)
            })
            .finally(() => setIsLoading(false));
    }

    return (
        <div className="login-container">
            <div className="bg-white login-form rounded col-md-3 p-5">
                <h4 className="font-weight-bold mb-2 text-uppercase">The Traveler</h4>
                <h6 className="mt-3 mb-4 fw-bold text-info">Log in to your account</h6>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" disabled/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control onBlur={handlePassword} type="password" placeholder="Password" disabled/>
                    </Form.Group>
                    <button onClick={handleLogInEmailAndPassword} className="login-button btn btn-primary w-100" type="submit">Login</button><br /><br />
                </Form>
                <NavLink className="new-account" as={Link} to="/signup">New Here ? Create Account.</NavLink><br /><br />
                <p>Or</p>
                <button onClick={handleLogInWithGoogle} className="google-signing-button btn border border-primary border-2 btn-sm w-100" type="submit"><i class="fab fa-google"></i>&nbsp; Sign In With Google</button>
            </div>
        </div>
    );
};

export default Login;