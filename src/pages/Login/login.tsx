import { Box, Flex, Input, Text } from "@chakra-ui/react"
import { Field } from "@/components/ui/field"
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png"

function Login(){
    return (
      <Box background={"#e4e4e7"} height={"100vh"} paddingTop={"114px"}>
        <Flex justifyContent={"center"} flexDirection={"column"} alignItems={"center"}  gap={"30px"} >
          <Flex justifyContent={"center"} flexDirection={"column"} alignItems={"center"}  gap={"30px"} backgroundColor={"#fafafa"} padding={"20px 30px"} borderRadius={"20px"}>
            <img src={Logo} alt="Logo"/>
            <Text style={{color: "black", fontSize: "24px", fontWeight: "bold", marginTop: "-20px"}}>Grupo de Estudos</Text>
            <Box>
        <Field label="Email" color={"black"}>
          <Input placeholder="me@example.com" width={"350px"} borderRadius={"40px"}/>
        </Field>

        <Field label="Senha" color={"black"} marginTop={"10px"}>
          <Input placeholder="Digite sua senha" type="password" width={"350px"} borderRadius={"40px"} />
        </Field>
            </Box>
            <Button background={"#2E23A7"} width={"350px"} height= {"50px"} borderRadius={"45px"} fontSize={24} color={"white"} marginBottom={"-10px"}>
                Entrar
            </Button>
            <Link to={"forgotPassword"} style={{ color: "black", textDecoration: "underline" }}>
                Esqueceu a senha?
            </Link>
            </Flex>
        </Flex>
        </Box>
      )
}

export default Login;