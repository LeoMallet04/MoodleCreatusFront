import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "@/pages/LandingPage/ladingPage";
import Login from "@/pages/Login/login";
import Home from "@/pages/Home/home";
import Card from "@/pages/Card/Card";
import Profile from "@/pages/Profile/profile";
import ForgotPassword from "@/pages/ForgotPassword/forgotPassword";

const AppRoutes= () => {
    return(
    <Router>
        <Routes>
            <Route path="/login/forgotPassword" element={<ForgotPassword/>}></Route>
            <Route path="/" element={<LandingPage/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/card" element={<Card/>}></Route>
            <Route path="/profile" element={<Profile/>}></Route>
        </Routes>
    </Router>
    )
}

export default AppRoutes;