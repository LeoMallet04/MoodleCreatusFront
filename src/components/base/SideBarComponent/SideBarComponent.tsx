import './SideBarComponent.css'
import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Flex, Text } from "@chakra-ui/react";
import { RiHome6Line } from "react-icons/ri";
import { RiCalendarLine } from "react-icons/ri";
import { FiMenu } from "react-icons/fi";
import { RiLogoutBoxLine } from "react-icons/ri";

function SideBar(){

    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => setIsOpen(!isOpen);

    const navigate = useNavigate();

    const goToHome = () => navigate('/home');

    const goToLogin = () => navigate('/login');

    const location = useLocation();

    const isHomeActive = location.pathname === '/home';

    //const isCalendarActive = location.pathname === '/calendar';

    return (
        <Flex className="sidebar"
              width={isOpen ? "10.5vw" : "4vw"}
              transition="width 0.3s">
            
            <button className="toggle-button" onClick={toggleSidebar}>
                <FiMenu className="menu-icon" />
                
            </button>

            <Flex className="buttons">
                <button className={`home ${isHomeActive ? 'active' : ''}`} onClick={goToHome}>
                    <Flex className="home-flex" align="center">
                        <RiHome6Line className='house-icon'/>
                        <Text
                            ml={1}
                            className={`hometext ${isOpen ? "fade-in" : "fade-out"}`}
                        >
                            Home
                        </Text>
                    </Flex>
                </button>
                <button className="calendar">
                    <Flex className="calendar-flex" align="center">
                        <RiCalendarLine className='calendar-icon'/>
                        <Text
                            ml={1}
                            className={`calendartext ${isOpen ? "fade-in" : "fade-out"}`}
                        >
                            Calendário
                        </Text>
                    </Flex>
                </button>
                <button className="logout" onClick={goToLogin}>
                    <Flex className="logout-flex">
                        <RiLogoutBoxLine className='logout-icon'/>
                        <Text
                            ml={1}
                            className={`logouttext ${isOpen ? "fade-in" : "fade-out"}`}
                        >
                            Sair
                        </Text>
                    </Flex>
                </button>
            </Flex>
        </Flex>
    );
}

export default SideBar;