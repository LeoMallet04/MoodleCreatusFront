import {Box, GridItem, HStack, Text, Flex, Button, Input, Grid } from "@chakra-ui/react";
import { AccordionItem, AccordionItemTrigger, AccordionRoot } from "@/components/ui/accordion";
import { FaRegPlusSquare } from "react-icons/fa";
import {useState } from "react";
import axios from "axios";
import { getLanguagesColor, getReposData} from "@/utils/GitAPI/apiGit.js";
import LanguageBox from "./LanguagesBox";


interface Project {
    title: string;
    sprint: number;
    description: string | null;
    link: string;
    user_email: string;
    languages: string[];
}

interface ProjetoListProps {
    handleAccordionClick: () => void;
    showCards: boolean;
    user_email: string;
}

export interface LanguageColorsDTO {
    languageColors: Record<string,string> | null;
    projectId:  string;
}

const API_URL = "http://localhost:3000/project";
const projects: Project[] = [];

function ProjetoList({ handleAccordionClick, showCards, user_email}: ProjetoListProps) {
    const [addProjectBoxVisible, setAddProjectBoxVisible] = useState(false);
    const [newProject, setNewProject] = useState<Project>({ title: "", sprint: 0, description: "", link: "", user_email: "" , languages: []});
    const [error, setError] = useState<string | null>(null);
    const [languagesColorsDTO, setLanguagesColorsDTO] = useState<LanguageColorsDTO>();

    const addProject = async (): Promise<void> => {
            user_email = "leonardoms.2010@hotmail.com";
            try {
               
                
                //Checa se os valores do NewProject são valores que já foraminicializados
                if(newProject.title && newProject.sprint && newProject.link){


                    for(const project of projects){
                        if(project.title == newProject.title){
                            alert("Já existe um projeto cadastrado com esse nome");   
                            return; 
                        }
                        if(project.sprint == newProject.sprint){
                            alert("Já existe um projeto cadastrado nessa sprint");
                            return;
                        }
                    }

                    var url = newProject.link.split("/");
                    var user = url[3];
    
                    const gitDto = await getReposData(user,newProject.title);
                        if(!gitDto){
                        alert("Certifique-se de inserir o nome do seu repositório no GitHub e o link para o repositório");
                    }
                    
                    if(gitDto != null){
                                
                        newProject.description = gitDto.repo_description;
                        newProject.languages = gitDto.repo_languages
                        const response = await axios.post(API_URL,{
                            link: newProject.link,
                            title: newProject.title,
                            description: newProject.description,
                            sprint: newProject.sprint,
                            user_email: user_email,
                            languages: gitDto.repo_languages,
                        },
                        {
                            withCredentials: true   
                        });
                        console.log(newProject);
            
                        if (response.status === 201) {
                            const colors = await getLanguagesColor(gitDto.repo_languages);

                            const colorsDTO: LanguageColorsDTO = {
                                languageColors: colors,
                                projectId: gitDto.repo_name,
                            }

                            setLanguagesColorsDTO(colorsDTO);
                            localStorage.setItem(`language_colors_${gitDto.repo_name}`, JSON.stringify(colorsDTO));
                            projects.push(newProject);
                            setNewProject({ title: "", sprint: 0, description: "", link: "", user_email: "", languages: [] });
                            setError(null);
                        }else{
                            setError("Erro ao adicionar o projeto. Tente novamente.");
                        }
                    }   
                    setNewProject({ title: "", sprint: 0, description: "", link: "", user_email: "", languages: [] });


                    // const getProject = await axios.get("https://localhost:3000/project/1",   {
                    //     withCredentials: true   
                    // });

                    // console.log(getProject.data);
                    


                }else{
                    setError("Preencha todos os campos corretamente.")
                }
            } catch (err: any) {
                if (axios.isAxiosError(err)) {
                    console.error("Erro:", err.response?.data?.message || "Erro desconhecido");
                } else {
                    console.error("Erro desconhecido.");
                }
            }
            
        }
    
    const handleAddProjectBoxToggle = () => {
        setAddProjectBoxVisible(!addProjectBoxVisible);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewProject((prev) => ({
            ...prev,
            [name]: name === "type" ? parseInt(value) : value || null,
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
                                    placeholder="Nome do Projeto"
                                    name="title"
                                    value={newProject.title}
                                    onChange={handleInputChange}
                                    mb={2}
                                    width={"100%"}
                                    height={"5vh"}
                                />
                                <Input
                                    placeholder="Sprint (1 - 5)"
                                    name="sprint"
                                    type="number"
                                    min={1}
                                    max={5}
                                    value={newProject.sprint}
                                    onChange={handleInputChange}
                                    mb={2}
                                    width={"100%"}
                                    height={"5vh"}
                                />
                                <Input
                                    placeholder="Link do Projeto"
                                    name="link"
                                    value={newProject.link}
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
                            borderRadius="lg"
                            bg="rgba(255, 255, 255, 0.05)"
                            borderColor="rgba(255, 255, 255, 0.12)"
                            h={project.description ? "auto" : "120px"}                         >
                            <Flex
                            flexDirection="row" justifyContent="space-between">
                                <Text fontFamily="Inter" fontWeight="bold" fontSize="xl" color="#4175A6" mb={2}>
                                    {project.title}
                                </Text>
                                <Text fontFamily="Inter" fontSize="small" color="#C2CFD9" mb={2} fontWeight="bold" mr={5}>
                                {"Sprint  " +project.sprint}
                            </Text>
                            </Flex>
                            {project.description && (
                                <Text fontFamily="Inter" fontSize="small" color="#C2CFD9" mb={4}>
                                    {project.description}
                                </Text>
                            )}
                            <Text fontFamily="Inter" fontSize="small" color="#C2CFD9" mb={4}>
                                {project.link}
                            </Text>

                            
                            <Flex flexDirection="row">
                            {project.languages.map((language, index) => (
                                <LanguageBox key={index} language={language} colorsDTO={languagesColorsDTO ?? null} /> 
                                ))}

                            </Flex>
                           
                            
                        </Box>
                    ))}
                </Grid>
            )}
        </GridItem>
    );
}

export default ProjetoList;
