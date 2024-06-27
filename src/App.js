import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AIServices from "./Pages/AIServices";
import PortfolioPage from "./Pages/PortfolioPage";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/category/:category" element={<AIServices />} />
                <Route path="/portfolio/:category" element={<PortfolioPage />} />
            </Routes>
        </Router>
    );
};

export default App;
