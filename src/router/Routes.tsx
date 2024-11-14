import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "@/pages/LandingPage/LandingPage";
import Login from "@/pages/Login/login";
import Home from "@/pages/Home/home";
import Sprint from "@/pages/Sprint/sprint";
import Profile from "@/pages/Profile/profile";
import ForgotPassword from "@/pages/ForgotPassword/forgotPassword";
import Subscribe from "@/pages/Inscricao/Subscribe";
import ChangePassword from "@/pages/ChangePassword/changePassword";
import Calendar from "@/pages/Calendar/Calendar";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login/forgotPassword" element={<ForgotPassword />}></Route>
                <Route path="/login/changePassword" element={<ChangePassword />}></Route>
                <Route path="/" element={<LandingPage />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/sprint" element={<Sprint />}></Route>
                <Route path="/profile" element={<Profile />}></Route>
                <Route path="/subscribe" element={<Subscribe />}></Route>
                <Route path="/calendar" element={<Calendar />}></Route>
            </Routes>
        </Router>
    )
}

export default AppRoutes;