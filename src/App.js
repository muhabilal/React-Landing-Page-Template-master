import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AIServices from "./Pages/AIServices";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/category/:category" element={<AIServices />} />
            </Routes>
        </Router>
    );
};

export default App;
