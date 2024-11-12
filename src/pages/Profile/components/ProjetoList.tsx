import { Badge, Box, GridItem, HStack, Text, Flex, Stack, Button, Input, Grid } from "@chakra-ui/react";
import { AccordionItem, AccordionItemTrigger, AccordionRoot } from "@/components/ui/accordion";
import AddComponent from "./AddComponent";
import { FaRegPlusSquare } from "react-icons/fa";
import { useState } from "react";

interface Project {
    title: string;
    description: string;
    languages: string[];
}

interface ProjetoListProps {
    handleAccordionClick: () => void;
    showCards: boolean;
    username: string;
}

const projects: Project[] = [
    { title: "Projeto 1", description: "Descrição do projeto 1", languages: ["Python", "JavaScript"] },
];

function ProjetoList({ handleAccordionClick, showCards, username }: ProjetoListProps) {
    const [addProjectBoxVisible, setAddProjectBoxVisible] = useState(false);
    const [newProject, setNewProject] = useState({ title: "", description: "" });

    const addProject = (): void => {
        if (newProject.title && newProject.description) {
            projects.push({
                title: newProject.title,
                description: newProject.description,
                languages: [],
            });
            setNewProject({ title: "", description: "" });
        }
    };

    const handleAddProjectBoxToggle = () => {
        setAddProjectBoxVisible(!addProjectBoxVisible);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewProject((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <GridItem marginBottom={"50%"} marginTop={"10%"} flexDirection={"row"}>
            <HStack marginLeft={"2%"} gap={2}>
                <Text fontFamily="Inter" fontWeight="bold" fontSize={{ base: "1.25rem", md: "1.5rem" }} color="#FFFFFF">
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
                                <Input
                                    placeholder="Nome do repositório"
                                    name="title"
                                    value={newProject.title}
                                    onChange={handleInputChange}
                                    mb={2}
                                    width={"100%"}
                                    height={"5vh"}
                                />
                                <Input
                                    placeholder="Sprint (1 - 5)"
                                    name="description"
                                    type="number"
                                    min={1}
                                    max={5}
                                    value={newProject.description}
                                    onChange={handleInputChange}
                                    mb={2}
                                    width={"100%"}
                                    height={"5vh"}
                                />
                            </Flex>

                            <Flex alignItems={"center"}>
                                <Button onClick={addProject} colorScheme="blue" alignSelf="flex-end" width={"10%"} marginLeft={"20%"} marginBottom={"85%"}>
                                    Add
                                </Button>
                            </Flex>
                        </Box>
                    )}
                </AccordionItem>
            </AccordionRoot>

            {showCards && (
                <Grid templateColumns={{ base: "1fr", sm: "repeat(1fr)", lg: "repeat(1fr)" }} gap={6} mt={4} height={"0px"} width={"50%"}>
                    {projects.map((project, index) => (
                        <Box
                            key={index}
                            pl={4}
                            pt={3}
                            h={"120px"}
                            borderRadius="lg"
                            bg="rgba(255, 255, 255, 0.05)"
                            borderColor="rgba(255, 255, 255, 0.12)"
                        >
                            <Text fontFamily="Inter" fontWeight="bold" fontSize="xl" color="#4175A6" mb={2}>
                                {project.title}
                            </Text>
                            <Text fontFamily="Inter" fontSize="small" color="#C2CFD9" mb={4}>
                                {project.description}
                            </Text>
                            <HStack>
                                {project.languages.map((language, i) => (
                                    <Badge key={i} colorScheme="purple">
                                        {language}
                                    </Badge>
                                ))}
                            </HStack>

                            <AddComponent username={username} projectName={project.title} />
                        </Box>
                    ))}
                </Grid>
            )}
        </GridItem>
    );
}

export default ProjetoList;
