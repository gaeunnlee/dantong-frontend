import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

export default function Router() {
    return(
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/signup" element={<SignUp/>} />
            </Routes>
        </BrowserRouter>
    )
}