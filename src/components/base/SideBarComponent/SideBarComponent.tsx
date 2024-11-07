import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Flex, IconButton, Text, Button } from "@chakra-ui/react";
import { RiHome6Line, RiCalendarLine, RiLogoutBoxLine } from "react-icons/ri";
import { FiMenu } from "react-icons/fi";

function SideBar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleSidebar = () => setIsOpen(!isOpen);

    const navigate = useNavigate();
    const goToHome = () => navigate('/home');
    const goToLogin = () => navigate('/login');
    const location = useLocation();

    const isHomeActive = location.pathname === '/home';

    return (
        <Flex
            zIndex={1}
            direction="column"
            minH="100vh"
            height={"100vh"}
            bg="#0B2436"
            width={isOpen ? "10.5vw" : "4vw"}
            transition="width 0.3s"
            overflow="hidden"
        >
            <IconButton
                aria-label="Toggle Menu"
                bg="transparent"
                color="white"
                onClick={toggleSidebar}
                m="0.5rem"
                _hover={{ bg: "transparent" }}
                fontSize="1.5rem"
            >
                <FiMenu />
            </IconButton>

            <Flex direction="column" width="100%" px="1rem" gap="0.5rem" alignItems={"center"}>
                <Button
                    bg={isHomeActive ? "#2E23A7" : "transparent"}
                    borderRadius="45px"
                    minH="2.5rem"
                    display="flex"
                    alignItems="center"
                    justifyContent="flex-start"
                    onClick={goToHome}
                    _hover={{ bg: isHomeActive ? "#2E23A7" : "rgba(255, 255, 255, 0.1)" }}
                >
                    <RiHome6Line color="white" fontSize="1.5rem" />
                    {isOpen && (
                        <Text
                            ml="1"
                            color="white"
                            fontFamily="Poppins, sans-serif"
                            fontWeight="700"
                            fontSize="16px"
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
                    display="flex"
                    alignItems="center"
                    justifyContent="flex-start"
                    _hover={{ bg: "rgba(255, 255, 255, 0.1)" }}
                >
                    <RiCalendarLine color="white" fontSize="1.5rem" />
                    {isOpen && (
                        <Text
                            ml="1"
                            color="white"
                            fontFamily="Poppins, sans-serif"
                            fontWeight="700"
                            fontSize="16px"
                            transition="opacity 0.3s ease, transform 0.3s ease"
                        >
                            Calendário
                        </Text>
                    )}
                </Button>

                <Button
                    bg="transparent"
                    borderRadius="45px"
                    minH="2.5rem"
                    mt="auto"
                    display="flex"
                    alignItems="center"
                    justifyContent="flex-start"
                    onClick={goToLogin}
                    _hover={{ bg: "rgba(255, 255, 255, 0.1)" }}
                    marginTop={"69vh"}
                >
                    <RiLogoutBoxLine color="white" fontSize="1.5rem" />
                    {isOpen && (
                        <Text
                            ml="1"
                            color="white"
                            fontFamily="Poppins, sans-serif"
                            fontWeight="700"
                            fontSize="16px"
                            transition="opacity 0.3s ease, transform 0.3s ease"
                        >
                            Sair
                        </Text>
                    )}
                </Button>
            </Flex>
        </Flex>
    );
}

export default SideBar;
