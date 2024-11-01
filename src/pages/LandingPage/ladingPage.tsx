import {Grid, Flex, GridItem, Text, Button, Image} from "@chakra-ui/react"
import logo from "../../assets/icons/logo-grupoEstudos.svg";
import ages from "../../assets/icons/logo-ages.svg";
// import creatus from "../../assets/icons/logo-creatus.svg";



function LandingPage(){
    return(
        <Grid templateColumns="1fr 1fr" backgroundColor={"#fafafa"} height={"100vh"}>
            <GridItem>
                <Flex height={"100vh"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
                    <Image src={logo} alt="Logo" width={"300px"}/>
                    <Text color={"black"} maxWidth={"600px"}>Este grupo de estudos é um espaço colaborativo para aprender e desenvolver habilidades técnicas essenciais em HTML, CSS, JavaScript, React, MongoDB e uso do GitHub para controle de versão, além de explorar práticas do mundo real. Combinando conteúdo técnico e desenvolvimento de soft skills como comunicação, trabalho em equipe e resolução de problemas, o </Text>
                    <Flex>
                        <Text>Powered by:</Text>
                        <Image src={ages} alt="Logo" />
                    </Flex>
                </Flex>
            </GridItem>
            <GridItem>
                <Flex height={"100vh"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} gap={"40px"} >
                    <Button fontSize={"24px"} background={"#2E23A7"} color={"#fafafa"} px="48px" py="12px" width={"200px"}>Formulário</Button>
                    <Button fontSize={"24px"} background={"#fafafa"} color={"#2E23A7"} border={"2px solid #2E23A7" }px="48px" py="12px" width={"200px"}>Entrar</Button>
                </Flex>
            </GridItem>
        </Grid>
    )
}

export default LandingPage