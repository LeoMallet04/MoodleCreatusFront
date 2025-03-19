import { Badge, Box, GridItem, HStack, Text, Flex, Stack, Button, Input, Grid } from "@chakra-ui/react";
import { AccordionItem, AccordionItemTrigger, AccordionRoot } from "@/components/ui/accordion";
import { FaRegPlusSquare } from "react-icons/fa";
import {useState } from "react";
import axios from "axios";
import { getReposData} from "@/utils/apiGit.js";


interface Project {
    title: string;
    sprint: number;
    description: string | null;
    link: string;
    user_email: string,
}

interface ProjetoListProps {
    handleAccordionClick: () => void;
    showCards: boolean;
    user_email: string;
}

const API_URL = "http://localhost:3000/project";
const projects: Project[] = [];

function ProjetoList({ handleAccordionClick, showCards, user_email}: ProjetoListProps) {
    const [addProjectBoxVisible, setAddProjectBoxVisible] = useState(false);
    const [newProject, setNewProject] = useState({ title: "", sprint: 0, description: "", link: "", user_email: "" });
        const [error, setError] = useState<string | null>(null);
        const addProject = async (): Promise<void> => {
            user_email = "leonardoms.2010@hotmail.com";
            try {
                // 🔹 1. Fazer login (o JWT será salvo no cookie automaticamente)
                await axios.post("http://localhost:3000/auth/login", {
                    email: "leonardoms.2010@hotmail.com",
                    password: "12345"
                }, { withCredentials: true });
            
                console.log("Login realizado com sucesso!");
            
                // 🔹 2. Buscar perfil (o cookie JWT será enviado automaticamente)
                const profileResponse = await axios.get("http://localhost:3000/auth/profile", {
                    withCredentials: true // 🔥 Isso garante que o cookie seja enviado
                });

                const token = profileResponse.headers.cookie;
            
                console.log("Perfil encontrado com sucesso!", profileResponse.data);
                
                if(newProject.title && newProject.sprint && newProject.link){
                    const response = await axios.post(API_URL,{
                        link: newProject.link,
                        title: newProject.title,
                        description: newProject.description,
                        sprint: newProject.sprint,
                        user_email: user_email
                    },
                    {
                        headers: {Authorization: `Berear ${token}`},
                        withCredentials: true   
                    });
                    console.log(newProject);
        
                    if (response.status === 201) {
                        projects.push(newProject);
                        setNewProject({ title: "", sprint: 0, description: "", link: "", user_email: "" });
                        setError(null);
                    }else{
                        setError("Erro ao adicionar o projeto. Tente novamente.");
                    }
                    setNewProject({ title: "", sprint: 0, description: "", link: "", user_email: "" });


                    // const getProject = await axios.get("https://localhost:3000/project/1",   {
                    //     headers: {Authorization: `Berear ${token}`},
                    //     withCredentials: true   
                    // });

                    // console.log(getProject.data);

                    
                    const gitDto = await getReposData("LeoMallet04","Calculator");
                    if(gitDto){
                        console.log(`Repo_Name: ${gitDto.repo_name} | Repo_Descriptions: ${gitDto.repo_description}`);
                    }else{
                        console.log("Dados não foram carregados corretamente")
                    }
                


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
                                    placeholder="Descrição do projeto (opcional)"
                                    name="description"
                                    value={newProject.description}
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
                            <Text fontFamily="Inter" fontWeight="bold" fontSize="xl" color="#4175A6" mb={2}>
                                {project.title}
                            </Text>
                            <Text fontFamily="Inter" fontSize="small" color="#C2CFD9" mb={2}>
                                {project.sprint}
                            </Text>
                            {project.description && (
                                <Text fontFamily="Inter" fontSize="small" color="#C2CFD9" mb={4}>
                                    {project.description}
                                </Text>
                            )}
                            <Text fontFamily="Inter" fontSize="small" color="#C2CFD9" mb={4}>
                                {project.link}
                            </Text>
                        </Box>
                    ))}
                </Grid>
            )}
        </GridItem>
    );
}

export default ProjetoList;


// const [data, setData] = useState<any>(null);
//     const [languagesUrl, setLanguages] = useState<string[]>([]);
//     const [error, setError] = useState<string | null>(null);


//     async function getReposData({ repoName, user }: { repoName: string; user: string }) {
//         try {
//             const response = await axios.get(`https://api.github.com/repos/${user}/${repoName}`);
//             return response.data;
//         } catch (error) {
//             if (axios.isAxiosError(error) && error.response?.status === 404) {
//              setError("Repositório não encontrado. Verifique o nome do repositório e o nome do usuário.");
//             } else {
//              setError("Ocorreu um erro ao buscar os dados do repositório.");
//             }
//             return null;
//         }
//     }
    
//     async function getRepoLanguages(url: string) {
//         try {
//             const response = await axios.get(url);
//             console.log()
//             return response.data;
//         } catch (error) {
//             setError("Ocorreu um erro ao buscar as linguagens do repositório.");
//             throw error;
//         }
//     }


//     useEffect(() => {
//         const fetchData = async () => {
//                 try {
//                     const data = await getReposData({ repoName: newRepo, user: username });
//                     console.log("Data 1:", data);   
//                     setData(data);
//                     if (data.languages_url) {
                       
//                         const languagesData = await getRepoLanguages(data.languages_url);
//                         console.log("Languages Data: ", languagesData);
//                         setLanguages(Object.keys(languagesData));
//                         console.log("Languages: ", languagesUrl);
//                     }
//                 } catch (error) {
//                     console.log("Não foi possível buscar os dados do repositório.", error);
//                 }
//         };

//         fetchData();
//     }, [newRepo, username]);
    

//     const addProject = async (): Promise<void> => {
//         console.log("Title:", newProject.title," Type:",newProject.type," Description:",newProject.description," Languages:",languagesUrl);
//         if (data && newProject.title && newProject.type) { 
//             try {
//                 const repoData = await getReposData({ repoName: newRepo, user: username });
//                 newProject.description = data.description;
//                 projects.push({
//                     title: newProject.title,
//                     type: newProject.type,
//                     description: newProject.description,
//                     languages: languagesUrl
//                 });
                
//                 setNewProject({ title: "", type: 0, description: "", languages: [] });
//                 setNewRepo("");
//                 setError(null);
                
//             } catch (error) {
                
//             }
//         }
//     };
