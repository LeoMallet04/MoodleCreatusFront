import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Flex, IconButton, Text, Button, Grid } from "@chakra-ui/react";
import { RiHome6Line, RiCalendarLine, RiLogoutBoxLine } from "react-icons/ri";
import { FiMenu } from "react-icons/fi";

function SideBar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleSidebar = () => setIsOpen(!isOpen);

    const navigate = useNavigate();
    const goToHome = () => navigate('/home');
    const goToLogin = () => navigate('/login');
    const goToCalendar = () => navigate('/calendar');
    const location = useLocation();

    const isHomeActive = location.pathname === '/home';

    return (
        <Grid
            paddingTop={"10px"}
            direction="column"
            minH="100vh"
            bg="#0B2436"
            width={isOpen ? {base:"40vw",md:"10.5vw"} : {base:"8vw",md:"4vw"}}
            transition="width 0.3s"
            overflow="hidden"
            justifyContent={"center"}
            position={"fixed"}
            zIndex={1}
        >
            <IconButton
                width={{base:"4rem",md:"1rem"}}
                borderRadius="45px"
                aria-label="Toggle Menu"
                bg="transparent"
                color="white"
                onClick={toggleSidebar}
                _hover={{ bg: isHomeActive ? "#2E23A7" : "rgba(255, 255, 255, 0.1)" }}
                alignItems="center"
                justifyContent="center"
                size={{base:"xs",md:"2xl"}}
            >
                <FiMenu/>
            </IconButton>

            <Flex
                direction="column"
                width="100%"
                px="0rem"
                gap="0.5rem"
                alignItems={isOpen ? "flex-start" : "center"}
                mt={"1rem"}
            >
                <Button
                    bg={isHomeActive ? "#2E23A7" : "transparent"}
                    borderRadius="45px"
                    minH="2.5rem"
                    width={isOpen ? "100%" : "1rem"}
                    display="flex"
                    alignItems="center"
                    justifyContent={isOpen ? "flex-start" : "center"}
                    onClick={goToHome}
                    _hover={{ bg: isHomeActive ? "#2E23A7" : "rgba(255, 255, 255, 0.1)" }}

                    px={isOpen ? "1rem" : "0rem"}

                >
                    <RiHome6Line color="white" fontSize="1.5rem" />
                    {isOpen && (
                        <Text
                            ml="1"
                            color="white"
                            fontFamily="Poppins, sans-serif"
                            fontWeight="700"
                            fontSize={{base:"12px",md:"16px"}}
                            transition="opacity 0.3s ease, transform 0.3s ease"
                        >
                            Home
                        </Text>
                    )}
                </Button>

                <Button
                    bg="transparent"
                    borderRadius="45px"
                    minH="2.5rem"
                    width={isOpen ? "100%" : "1rem"}
                    display="flex"
                    alignItems="center"
                    justifyContent={isOpen ? "flex-start" : "center"}
                    _hover={{ bg: "rgba(255, 255, 255, 0.1)" }}
                    px={isOpen ? "1rem" : "0"}
                    onClick={goToCalendar}
                >
                    <RiCalendarLine color="white" fontSize="1.5rem" />
                    {isOpen && (
                        <Text
                            ml="1"
                            color="white"
                            fontFamily="Poppins, sans-serif"
                            fontWeight="700"
                            fontSize={{base:"12px",md:"16px"}}
                            transition="opacity 0.3s ease, transform 0.3s ease"
                        >
                            Calendário
                        </Text>
                    )}
                </Button>
            </Flex>
            <Button
                    bg="transparent"
                    borderRadius="45px"
                    minH="2.5rem"
                    width={isOpen ? "100%" : "1rem"}
                    display="flex"
                    alignItems="center"
                    justifyContent={isOpen ? "flex-start" : "center"}
                    onClick={goToLogin}
                    _hover={{ bg:    "rgba(255, 255, 255, 0.1)" }}
                    px={isOpen ? "1rem" : "0"}
                    marginTop="64vh"
                    justifySelf={"center"}
                >
                    <RiLogoutBoxLine color="white" fontSize="1.5rem"/>
                    {isOpen && (
                        <Text
                            ml="1"
                            color="white"
                            fontFamily="Poppins, sans-serif"
                            fontWeight="700"
                            fontSize={{base:"12px",md:"16px"}}
                            transition="opacity 0.3s ease, transform 0.3s ease"
                        >
                            Sair
                        </Text>
                    )}
                </Button>
        </Grid>
    );
}

export default SideBar;