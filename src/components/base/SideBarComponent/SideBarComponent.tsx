import './SideBarComponent.css'
import { useState } from 'react';
import { Flex, Text } from "@chakra-ui/react";
import { RiHome6Line } from "react-icons/ri";
import { RiCalendarLine } from "react-icons/ri";
import { FiMenu } from "react-icons/fi";
import { RiLogoutBoxLine } from "react-icons/ri";

function SideBar(){

    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => setIsOpen(!isOpen);

    return (
        <Flex className="sidebar"
              width={isOpen ? "11vw" : "5vw"}
              transition="width 0.3s">
            
            <button className="toggle-button" onClick={toggleSidebar}>
                <FiMenu className="menu-icon" />
                
            </button>

            <Flex className="buttons">
                <button className="home">
                    <Flex className="home-flex" align="center">
                        <RiHome6Line className='house-icon'/>
                        {isOpen && <Text ml={2} className="hometext">Home</Text>}
                    </Flex>
                </button>
                <button className="faq">
                    <Flex className="faq-flex" align="center">
                        <RiCalendarLine className='faq-icon'/>
                        {isOpen && <Text ml={2} className="faqtext">FAQ</Text>}
                    </Flex>
                </button>
                <button className="logout">
                    <Flex className="logout-flex">
                        <RiLogoutBoxLine className='logout-icon'/>
                        {isOpen && <Text ml={2} className="logouttext">Sair</Text>}
                    </Flex>
                </button>
            </Flex>
        </Flex>
    );
}

export default SideBar;