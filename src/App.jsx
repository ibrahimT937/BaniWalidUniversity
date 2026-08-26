import "./App.css";

import Navbar from "./components/layout/Navbar/Navbar";

import Section from "./section";
import ITCollege from "./it";
import EngineeringCollege from "./engineering";
import Arts from "./arts";
import Science from "./science";
import AboutUniversity from "./AboutUniversity";

import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <Navbar />

            <Routes>
                <Route path="/" element={<Section />} />
                <Route path="/it" element={<ITCollege />} />
                <Route path="/engineering" element={<EngineeringCollege />} />
                <Route path="/arts" element={<Arts />} />
                <Route path="/science" element={<Science />} />
                <Route
                    path="/AboutUniversity"
                    element={<AboutUniversity />}
                />
            </Routes>
        </>
    );
}

export default App;