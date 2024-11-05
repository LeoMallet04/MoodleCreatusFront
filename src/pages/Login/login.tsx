import { Box, Flex, Image, Input } from "@chakra-ui/react"
import { Field } from "@/components/ui/field"
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Titulo from "../../assets/GRUPO DE ESTUDOS.svg";
import { useNavigate } from "react-router-dom";

function Login(){
    const navigate= useNavigate();
    return (
      <Box bgGradient= "to-bl" gradientFrom= {"var(--gradient1)"} gradientTo= {"var(--gradient2)"} height={"100vh"} paddingTop={"114px"}>
        <Flex justifyContent={"center"} flexDirection={"column"} alignItems={"center"}  gap={"30px"} >
          <Flex justifyContent={"center"} flexDirection={"column"} alignItems={"center"}  gap={"30px"} backgroundColor={"#223547"} padding={"20px 30px"} borderRadius={"20px"}>
            <Image src={Titulo} alt="Titulo" marginTop={"30px"}/>
            <Box>
        <Field label="Email" color={"white"}>
          <Input placeholder="me@example.com" width={"350px"} borderRadius={"40px"} backgroundColor={"#D9D9D9"} color={"#000000"}/>
        </Field>

        <Field label="Senha" color={"white"} marginTop={"10px"}>
          <Input placeholder="Digite sua senha" type="password" width={"350px"} borderRadius={"40px"} backgroundColor={"#D9D9D9"} color={"#000000"}/>
        </Field>
            </Box>
            <Button onClick= {() =>{navigate("/home")}} background={"#2E23A7"} width={"350px"} height= {"50px"} borderRadius={"20px"} fontSize={24} color={"white"} marginBottom={"-10px"} margin={"10px"}>
                Entrar
            </Button>
            <Link to={"forgotPassword"} style={{ color: "gray", textDecoration: "underline" }}>
                Esqueci minha senha
            </Link>
            </Flex>
        </Flex>
        </Box>
      )
}

export default Login;