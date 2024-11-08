import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "@/pages/LandingPage/ladingPage";
import Login from "@/pages/Login/Login";
import Home from "@/pages/Home/home";
import Card from "@/pages/Card/Card";
import Profile from "@/pages/Profile/profile";
import ForgotPassword from "@/pages/ForgotPassword/forgotPassword";
import Subscribe from "@/pages/Inscricao/Subscribe";
import ChangePassword from "@/pages/ChangePassword/ChangePassword";

const AppRoutes= () => {
    return(
    <Router>
        <Routes>
            <Route path="/login/forgotPassword" element={<ForgotPassword/>} />
            <Route path="/login/changePassword" element={<ChangePassword/>} />
            <Route path="/" element={<LandingPage/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/card" element={<Card/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/subscribe" element={<Subscribe/>} />
        </Routes>
    </Router>
    )
}

export default AppRoutes;