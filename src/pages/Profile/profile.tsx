import { useState} from "react";
import { Flex, HStack, Stack, Text, Grid, GridItem } from "@chakra-ui/react";
import { Avatar } from "@/components/ui/avatar";
import SideBar from "@/components/base/SideBarComponent/SideBarComponent";
import NavBar from "@/components/base/NavBar/NavBar";
import DadosComponent from "./components/DadosComponent";
import ProjetoList from "./components/ProjetoList";


interface User {
    id: string;
    name: string;
    email: string;
    avatar: string;
}


const authenticatedUser: User = {
    id: "1",
    name: "LeoMallet04",
    email: "pedro@gmail.com",
    avatar: "",
};


//trocar para uma função que exiba uma lista dos projetos
//API que puxa projeto do github - variaveis necessarias: nome do usuario e nome do projeto

const Profile: React.FC = () => {
    const [showCards, setShowCards] = useState(false);
    
    const handleAccordionClick = () => {
        setShowCards((prev) => !prev);
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
                    alignItems="center"
                    width={{ base: "calc(100vw - 8px)", md: "calc(100vw - 60px)" }}
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
                                    github="LeoMallet04"
                                    faltas={0}
                                ></DadosComponent>

                            </Stack>
                        </HStack>

                    </GridItem>
                        
                    <ProjetoList  handleAccordionClick={handleAccordionClick} showCards={showCards} user_email={authenticatedUser.email}></ProjetoList>

                </Grid>

            </Flex>
        </Flex>

    );
};

export default Profile;