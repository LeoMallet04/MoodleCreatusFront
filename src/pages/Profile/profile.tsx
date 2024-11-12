import { useState } from "react";
import { Flex, HStack, Stack, Text, Grid, GridItem, Badge, Box, Button, Input } from "@chakra-ui/react";
import { Avatar } from "@/components/ui/avatar";
import SideBar from "@/components/base/SideBarComponent/SideBarComponent";
import NavBar from "@/components/base/NavBar/NavBar";
import DadosComponent from "./components/DadosComponent";
import {
    AccordionItem,
    AccordionItemTrigger,
    AccordionRoot,
} from "@/components/ui/accordion";
import { FaRegPlusSquare } from "react-icons/fa";

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

const initialProjects = [
    { title: "Calculadora", description: "Breve descrição do projeto de Calculadora", tags: ["CSS", "HTML", "JavaScript"] }
];

const Profile: React.FC = () => {
    const [showCards, setShowCards] = useState(false);
    const [addProjectBoxVisible, setAddProjectBoxVisible] = useState(false);
    const [projects, setProjects] = useState(initialProjects);
    const [newProject, setNewProject] = useState({ title: "", description: "", repoLink: "" });

    const handleAccordionClick = () => {
        setShowCards((prev) => !prev);
    };

    const handleAddProjectBoxToggle = () => {
        setAddProjectBoxVisible((prev) => !prev);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewProject((prev) => ({ ...prev, [name]: value }));
    };

    const addNewProject = () => {
        setProjects((prevProjects) => [
            ...prevProjects,
            {
                title: newProject.title,
                description: newProject.description,
                tags: ["GitHub"],
            },
        ]);
        setNewProject({ title: "", description: "", repoLink: "" });
        setAddProjectBoxVisible(false);
    };

    return (
        <Flex direction="column" width="100vw" height="100vh" overflowX="hidden" bg={"#021823"}>
            <NavBar />
            <Flex zIndex={10} position="fixed" top={0} left={0} height="100vh">
                <SideBar />
                <Grid
                    templateColumns={{ base: "1fr", md: "1fr 1fr" }}
                    position="relative"
                    top={{ base: 24, md: 10 }}
                    left={{ base: 4, md: 40 }}
                    alignItems="flex"
                    width={{ base: "calc(100vw - 8px)", md: "calc(100vw - 60px)" }}
                    gap={5}
                    p={{ base: 4, md: 0 }}
                >
                    <GridItem>
                        <HStack gap={4} align="center" marginLeft={"6%"} marginTop={"10%"}>
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
                                />
                            </Stack>
                        </HStack>
                    </GridItem>
                    <GridItem marginBottom={"50%"} marginTop={"10%"} flexDirection={"row"}>
                        <HStack marginLeft={"2%"} gap={2}>
                            <Text
                                fontFamily="Inter"
                                fontWeight="bold"
                                fontSize={{ base: "1.25rem", md: "1.5rem" }}
                                color="#FFFFFF"
                            >
                                Meus Projetos
                            </Text>
                            <FaRegPlusSquare color="#FFFFFF" onClick={handleAddProjectBoxToggle} cursor="pointer" />
                        </HStack>
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
                                <AccordionItemTrigger onClick={handleAccordionClick} />
                                {addProjectBoxVisible && (
                                    <Box
                                        p={4}
                                        borderRadius="lg"
                                        bg="rgba(255, 255, 255, 0.05)"
                                        mt={2}
                                        width="100%"
                                        
                                        display="flex"
                                        flexDirection="row"
                                        gap={3}
                                    >
                                        <Flex display={"flex"} flexDirection={"column"} width={"90%"} marginTop={"5%"}> 
                                            <Input placeholder="Nome do Projeto" name="title" value={newProject.title} onChange={handleInputChange} mb={2} width={"100%"} height={"5vh"}/>
                                            <Input placeholder="Subtítulo" name="description" value={newProject.description} onChange={handleInputChange} mb={2} width={"100%"} height={"5vh"}/>
                                            <Input placeholder="Link do Repositório" name="repoLink" value={newProject.repoLink} onChange={handleInputChange} mb={4} width={"100%"} height={"5vh"}/> 
                                        </Flex>
                                        <Flex alignItems={"center"}>
                                            <Button onClick={addNewProject} colorScheme="blue" alignSelf="flex-end" width={"10%"} marginLeft={"20%"} marginBottom={"85%"}>
                                                Add
                                            </Button>
                                        </Flex>
                                    </Box>
                                )}
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
