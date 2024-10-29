import { Box, Input } from "@chakra-ui/react"
import { Field } from "@/components/ui/field"
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function Login(){
    return (
        <Box display={"flex"} justifyContent={"center"} flexDirection={"column"} alignItems={"center"} margin={"185px"} gap={"30px"}>
            {/* <img src="https://www.logolynx.com/images/logolynx/7f/7f4b7b3b1b1f1b1f1b1f1b1f1b1f1b1f.png" alt="logo" /> */}
            <Box>
        <Field label="Email" color={"white"}>
          <Input placeholder="me@example.com" width={"350px"}/>
        </Field>

        <Field label="Senha" color={"white"}>
          <Input placeholder="" type="password" width={"350px"}/>
        </Field>
            </Box>
            <Button background={"gray"} width={"400px"}>
                Entrar
            </Button>
            <Link to={"forgotPassword"}>
                Esqueceu a senha?
            </Link>
        </Box>
      )
}

export default Login;