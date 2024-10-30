import { Box, Flex, Input } from "@chakra-ui/react"
import { Field } from "@/components/ui/field"
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png"

function Login(){
    return (
      <Box background={"white"} height={"100vh"} paddingTop={"185px"}>
        <Flex justifyContent={"center"} flexDirection={"column"} alignItems={"center"}  gap={"30px"} >
            <img src={Logo} alt="Logo"/>
            <Box>
        <Field label="Email" color={"black"}>
          <Input placeholder="me@example.com" width={"350px"} borderRadius={"40px"}/>
        </Field>

        <Field label="Senha" color={"black"}>
          <Input placeholder="Digite sua senha" type="password" width={"350px"} borderRadius={"40px"}/>
        </Field>
            </Box>
            <Button background={"#2E23A7"} width={"350px"} height= {"50px"} borderRadius={"45px"} fontSize={24} color={"white"}>
                Entrar
            </Button>
            <Link to={"forgotPassword"}>
                Esqueceu a senha?
            </Link>
        </Flex>
        </Box>
      )
}

export default Login;