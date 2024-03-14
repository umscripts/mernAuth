import React, { useState } from 'react';
import '../CSS/signup.css';
import Axios from "axios";

const Signup = () => {
    const [userName, setName] = useState("");
    const [userEmail, setEmail] = useState("");
    const [userPassword, setPassword] = useState("");

    const submitForm = (e) => {
        e.preventDefault();
        Axios.post("http://localhost:3500/auth/signup", { userName, userEmail, userPassword })
            .then(response => {
                console.log(response);
            }).catch(err => {
                console.log(err);
            });
    };

    return (
        <>
            <div className="container">
                <h2>Sign Up</h2>
                <form onSubmit={submitForm} className='signupForm'>

                    <div className="forminput">
                        <label htmlFor="userName">Name</label>
                        <input type="text" placeholder='Enter User Name Here'
                            onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="forminput">
                        <label htmlFor="userEmail">Email</label>
                        <input type="email" placeholder='Enter User Email Here'
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="forminput">
                        <label htmlFor="userPassword">Password</label>
                        <input type="password" placeholder='Enter Password Here'
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button className="submitButton" type='submit'>Submit</button>
                    <div className="forminput">
                        <label>Already have an account?</label>
                        <button className="submitButton" type='submit'>Log In</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Signup;
