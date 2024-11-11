import { useState } from "react";
import { Flex, HStack, Stack, Text, Grid, GridItem, Badge, Box } from "@chakra-ui/react";
import { Avatar } from "@/components/ui/avatar";
import SideBar from "@/components/base/SideBarComponent/SideBarComponent";
import NavBar from "@/components/base/NavBar/NavBar";
import DadosComponent from "./components/DadosComponent";
import {
    AccordionItem,
    AccordionItemTrigger,
    AccordionRoot,
} from "@/components/ui/accordion";

interface User {
    id: string;
    name: string;
    email: string;
    avatar: string;
}

const authenticatedUser: User = {
    id: "1",
    name: "Nome Usuario",
    email: "email@example.com",
    avatar: "",
};

const projects = [
    { title: "Calculadora", description: "Breve descrição do projeto de Calculadora", tags: ["CSS", "HTML", "JavaScript"] },
    { title: "Conversor de Moedas", description: "Breve descrição do projeto de Conversor de Moedas", tags: ["React", "API", "JavaScript"] },
    { title: "Portfolio", description: "Breve descrição do projeto de Portfolio", tags: ["React", "Chakra UI", "TypeScript"] },
];

const Profile: React.FC = () => {
    const [showCards, setShowCards] = useState(false);

    const handleAccordionClick = () => {
        setShowCards((prev) => !prev);
    };

    return (
            <Flex direction="column" width="100vw" height="100vh" overflowX="hidden" backgroundColor="red !important">
            <NavBar/>
            <Flex flex="1" zIndex={1000} position="fixed" top={0} left={0} height="100vh" backgroundColor="red !important">
                <SideBar/>
                

                <Grid
                    templateColumns={{ base: "1fr", md: "1fr 1fr" }}
                    position="fixed"
                    top={{ base: 24, md: 20 }}
                    left={{ base: 4, md: 40 }}
                    alignItems="center"
                    width={{ base: "calc(100vw - 8px)", md: "calc(100vw - 60px)" }}
                    zIndex={10}
                    gap={5}
                    p={{ base: 4, md: 0 }}
                >
                    <GridItem>
                        <HStack gap={4} align="center" marginLeft={"6%"}>
                            <Avatar
                                name={authenticatedUser.name}
                                size={{ base: "md", md: "lg" }}
                                src={authenticatedUser.avatar}
                                style={{
                                    width: '22vh',
                                    height: '22vh',
                                }}
                            />
                            <Stack gap={0}>
                                <Text
                                    color="#C2CFD9"
                                    fontWeight="bold"
                                    fontFamily="Inter"
                                    fontSize={{ base: "1.25rem", md: "1.5rem" }}
                                >
                                    {authenticatedUser.name}
                                </Text>
                            </Stack>
                        </HStack>

                        <HStack>
                            <Stack>
                                <DadosComponent
                                    curso="Engenharia de Software"
                                    email="exemplo@gmail.com"
                                    github="Username"
                                    faltas={0}
                                ></DadosComponent>
                            </Stack>
                        </HStack>

                    </GridItem>

                    <GridItem marginBottom={"50%"}>
                        <Text fontFamily="Inter" fontWeight="bold" top={"100"} fontSize={{ base: "1.25rem", md: "1.5rem" }} color="#FFFFFF">
                            Meus Projetos
                        </Text>
                        <AccordionRoot collapsible defaultValue={["a"]}>
                            <AccordionItem
                                value="a"
                                width={{ base: "100%", md: "50%" }}
                                border={"0rem solid rgba(255, 255, 255, 0.12)"}
                                borderRadius={"1rem"}
                                mb={"4"}
                                p={"2"}
                                bg={"rgba(255, 255, 255, 0.05)"}
                            >
                                <AccordionItemTrigger onClick={handleAccordionClick}>

                                </AccordionItemTrigger>
                            </AccordionItem>
                        </AccordionRoot>

                        {showCards && (
                            <Grid
                                templateColumns={{ base: "1fr", sm: "repeat(1fr)", lg: "repeat(1fr)" }}
                                gap={6}
                                mt={4}
                                width={"50%"}
                            >
                                {projects.map((project, index) => (
                                    <Box
                                        key={index}
                                        p={4}
                                        borderRadius="lg"
                                        bg="rgba(255, 255, 255, 0.05)"
                                        borderColor="rgba(255, 255, 255, 0.12)"
                                    >
                                        <Text fontFamily="Inter" fontWeight="bold" fontSize="1.25rem" color="#4175A6" mb={2}>
                                            {project.title}
                                        </Text>
                                        <Text fontFamily="Inter" fontSize="1rem" color="#C2CFD9" mb={4}>
                                            {project.description}
                                        </Text>
                                        <HStack>
                                            {project.tags.map((tag, i) => (
                                                <Badge key={i} colorScheme="purple">
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </HStack>
                                    </Box>
                                ))}
                            </Grid>
                        )}
                    </GridItem>
                </Grid>
            </Flex>
        </Flex>
    
        
    );
};

export default Profile;
