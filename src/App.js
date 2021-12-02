import "./App.css";
import  RegForm  from "./components/RegForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DisBoard from "./components/DisBoard";
// import React, { Fragment } from "react";

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<RegForm />}></Route>
                <Route path="/disboard" element={<DisBoard />}></Route>
            </Routes>
        </Router>
    );
}

export default App;
