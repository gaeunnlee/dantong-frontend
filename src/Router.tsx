import React from "react";
import { Route, Routes, useLocation } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

export default function Router() {
    return(
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={[<Header/>,<Home/>]} />
                <Route path="/login" element={<Login/>} />
                <Route path="/signup" element={<SignUp/>} />
            </Routes>
        </BrowserRouter>
    )
}