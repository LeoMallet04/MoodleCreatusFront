import { Field } from "@/components/ui/field";
import { Box, Button, Flex, Input, Image } from "@chakra-ui/react";
import Titulo from "@/assets/GRUPO DE ESTUDOS.svg";

function ChangePassword() {
  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get('token');
  document.cookie = `jwt=${token}; max-age=600;path=/; secure; SameSite=Strict`;
  async function changePassword() {
    const data=await fetch('http://localhost:3000/user/changePW', {
      method: 'PUT',
      credentials: 'include', 
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({oldPassword: '12345', newPassword  : '123456'}),//to do pegar os valores dos inputs
    })
    if (data.ok) {
      console.log('Senha alterada com sucesso');
    } else {
      console.log('Erro ao alterar a senha');
    }
  }
  return (
    <Flex bgGradient="to-bl" gradientFrom= {"var(--gradient1)"} gradientTo= {"var(--gradient2)"} height={"100vh"} width={"100vw"} justifyContent={"center"} flexDirection={"column"} alignItems={"center"}  gap={"30px"}>
          <Flex justifyContent={"center"} flexDirection={"column"} alignItems={"center"}  gap={{base:"15px",sm:"30px"}} backgroundColor={"#223547"} padding={"20px 30px"} borderRadius={"20px"}> 
            <Image src={Titulo} alt="Titulo" marginTop={{base:"10px",sm:"20px"}} width={{base:"100px",sm:"130px" ,md:"180px"}}/>
            <Box>
              <Field label={"Nova Senha"} color={"white"}>
                <Input placeholder={"*****"} width={{base:"200px",sm:"250px" ,md:"350px"}} borderRadius={"40px"} backgroundColor={"#D9D9D9"} color={"#000000"} fontSize={{base:"10px",sm:"12px", md:"16px"}}/>
              </Field>
              <Field label={"Confirmar Senha"} color={"white"} marginTop={"10px"}>
                <Input placeholder={"*****"} type="password" width={{base:"200px",sm:"250px" ,md:"350px"}} borderRadius={"40px"} backgroundColor={"#D9D9D9"} color={"#000000"}/>
              </Field>
            </Box>
            <Button onClick= {changePassword} background={"#2E23A7"}  width={{base:"100px",sm:"250px" ,md:"350px"}} height= {"50px"} borderRadius={"20px"} fontSize={{sm:"18px",md:"24px"}} color={"white"} marginBottom={"-10px"} margin={"10px"} shadow="7px 10px 10px 5px rgba(0, 0, 3, .2)"> 
                Entrar
            </Button>
          </Flex>
        </Flex>
  )
}

export default ChangePassword;
