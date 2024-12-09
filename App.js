import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import UserLoginPage from "./pages/UserLoginPage";
import TechnicianLoginPage from "./pages/TechnicianLoginPage";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login/user" element={<UserLoginPage />} />
                <Route path="/login/technician" element={<TechnicianLoginPage />} />
            </Routes>
        </Router>
    );
};

export default App;
