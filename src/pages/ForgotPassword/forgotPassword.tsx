import { Box, Flex, Image, Input, Text } from "@chakra-ui/react"
import { Field } from "@/components/ui/field"
import { Button } from "@/components/ui/button";
import Titulo from "../../assets/GRUPO DE ESTUDOS.svg";
import { useState } from "react";
import axios from 'axios';
function ForgotPassword() {
  const [popupVisible, setPopupVisible] = useState(false);
  const [email, setEmail] = useState('');
  const sendRequest = async () => {
    try {
      const response = await axios.post('http://localhost:3000/user/forgotPW', {
        email
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(response.data);
      setPopupVisible(true);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      setPopupVisible(false);
    }
  };

  return (
    <Flex bgGradient="to-bl" gradientFrom={"var(--gradient1)"} gradientTo={"var(--gradient2)"} height={"100vh"} width={"100vw"} justifyContent={"center"} flexDirection={"column"} alignItems={"center"} gap={"30px"}>
      <Flex justifyContent={"center"} flexDirection={"column"} alignItems={"center"} gap={{ base: "15px", sm: "30px" }} backgroundColor={"#223547"} padding={"20px 30px"} borderRadius={"20px"}>
        <Image src={Titulo} alt="Titulo" marginTop={{ base: "10px", sm: "20px" }} width={{ base: "100px", sm: "130px", md: "180px" }} />
        <Text
          fontSize={"24px"}
          fontFamily={"Russo One"}
          fontWeight={"bold"}
        >Redefinição de Senha
        </Text>

        <Text
          fontSize={"18px"}
          maxWidth={"295px"}
          color={"#BFBBBB"}
        >Informe um Email e enviaremos um link para a recuperação da sua senha
        </Text>

        <Box>
          <Field label="Email" color={"white"}>
            <Input placeholder="me@example.com" width={{ base: "200px", sm: "250px", md: "350px" }} borderRadius={"40px"} backgroundColor={"#D9D9D9"} color={"#000000"} fontSize={{ base: "10px", sm: "12px", md: "16px" }} onChange={(e) => setEmail(e.target.value)} />
          </Field>
        </Box>
        <Button onClick={sendRequest} background={"#2E23A7"} width={{ base: "100px", sm: "250px", md: "350px" }} height={"50px"} borderRadius={"20px"} fontSize={{ sm: "18px", md: "24px" }} color={"white"} marginBottom={"-10px"} margin={"10px"} shadow="7px 10px 10px 5px rgba(0, 0, 3, .2)">
          Enviar
        </Button>
        {popupVisible && (
          <Text color="white" marginTop="10px">
            Enviado, verifique seu Email.
          </Text>
        )}
      </Flex>
    </Flex>
  )
}

export default ForgotPassword;