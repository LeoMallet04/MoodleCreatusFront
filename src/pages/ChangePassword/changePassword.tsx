import LoginPage from "@/components/base/NavBar/loginPage";
import { Button } from "@chakra-ui/react";

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
    <>
      <LoginPage
        link=""
        label1="Nova senha"
        placeholder1="*****"
        label2="Confirmar Senha"
        placeholder2="*****"
      />
      <Button onClick={changePassword} background={"#2E23A7"} width={{ base: "100px", sm: "250px", md: "350px" }} height={"50px"} borderRadius={"20px"} fontSize={{ sm: "18px", md: "24px" }} color={"white"} marginBottom={"-10px"} margin={"10px"} shadow="7px 10px 10px 5px rgba(0, 0, 3, .2)">
        Entrar
      </Button>
    </>
  )
}

export default ChangePassword;