import React, { useState } from "react";
import Avatar from '@mui/material/Avatar';

const Form = () => {
    // State variables to store form input values
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // You can perform form validation here before submitting
        // For simplicity, let's just log the form data for now
        console.log("Form submitted:", { firstName, lastName, email, password });
        // You can also send this data to an API endpoint or perform any other action
    };

    return (
        <div style={{marginLeft: '300px', marginRight:'300px'}}>
            <Avatar
                alt="Profile Avatar"
                src="/static/images/avatar/1.jpg"
                sx={{ width: 100, height: 100, mb: 4 }}
            />
            <div className="max-w-md mx-auto p-6 bg-white rounded shadow-md">
                <h1 className="text-2xl font-bold mb-4">Signup Form</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                            First Name:
                        </label>
                        <input
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            type="text"
                            id="firstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                            Last Name:
                        </label>
                        <input
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            type="text"
                            id="lastName"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email:
                        </label>
                        <input
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password:
                        </label>
                        <input
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600" type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default Form;
