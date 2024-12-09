import React, { useState } from "react";

const UserLoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const validate = () => {
        if (!/\S+@\S+\.\S+/.test(email)) return "Invalid email format";
        if (password.length < 8 || !/[!@#$%^&*]/.test(password)) return "Weak password";
        return null;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationError = validate();
        if (validationError) setError(validationError);
        else setError(""); // Perform login
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>User Login</h2>
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Login</button>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
    );
};

export default UserLoginPage;
