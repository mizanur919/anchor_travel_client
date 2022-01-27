import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, NavLink, useHistory } from 'react-router-dom';
import './Signup.css'
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const history = useHistory();
    const [loading, setLoading] = useState(false);

    const auth = getAuth();

    // Get data from name input filed
    const handleName = e => {
        setName(e.target.value);
    }

    // Get data from email input filed
    const handleEmail = e => {
        setEmail(e.target.value);
    }

    // Get data from password input filed
    const handlePassword = e => {
        setPassword(e.target.value);
    }

    // Sign up function using Email & Password
    const handleSignUp = (e) => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Password should be at least 6 characters');
            return;
        }
        // Check Password Strength - contain minimum 2 uppercase letters
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password must contain minimum 2 uppercase letters');
            return;
        }
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                updateProfile(auth.currentUser, { displayName: name })
                    .then(() => history.push('/home'))
            })
            .catch((error) => {
                alert(error.message);
            })
            .finally(() => setLoading(false))
    }

    return (
        <div className="login-container d-flex justify-content-center align-items-center">
            <div className="bg-white p-4 rounded col-md-3 mx-auto align-items-center">
                <h4 className="font-weight-bold mb-4 text-uppercase">The Traveler</h4>
                <h6 className="mt-3 mb-4 fw-bold text-info">Create a new account</h6>
                <Form onClick={handleSignUp}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control onChange={handleName} type="text" id="name" placeholder="Name" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control onChange={handleEmail} type="email" id="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control onChange={handlePassword} type="password" id="password" placeholder="Password" required />
                        <span className="text-danger">{error}</span>
                    </Form.Group>
                    <button className="btn btn-primary w-100" type="submit">
                        {loading ? "Creating Account ..." : "Sign Up"}
                    </button><br /><br />
                </Form>
                <NavLink className="new-account" as={Link} to="/login">Already have an account?</NavLink>
            </div>
        </div>
    );
};

export default Signup;