import React from "react";
import logo from "../assets/images/logo.png";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">NVIRI Solutions</a>
            <a className="navbar-brand" href="/">
    <img src={logo} alt="NVIRI logo" />
    NVIRI Solutions
</a>

            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
                
            >
                <span className="navbar-toggler-icon"></span>
            </button>
        </nav>
    );
};

export default Navbar;
