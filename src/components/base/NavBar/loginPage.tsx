import { Box, Flex, Image, Input } from "@chakra-ui/react"
import { Field } from "@/components/ui/field"
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Titulo from "@/assets/GRUPO DE ESTUDOS.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';

async function loginUser(email: string, password: string) {
    try {
        const response = await axios.post('http://localhost:3000/auth/login', {
            email,
            password
        }, {
            withCredentials: true
        });

        console.log('Login response:', response);
    } catch (error) {
        console.error('Login failed:', error);
        throw new Error('Network response was not ok');
    }
}
function LoginPage({link,label1,placeholder1,label2,placeholder2}:{link:string,label1:string,placeholder1:string,label2:string,placeholder2:string}){
    const navigate= useNavigate();
    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = async () => {
      try {
          await loginUser(email, password);
          navigate("/home");
      } catch (error) {
          console.error('Login failed:', error);
      }
  };
    return (
        <Flex bgGradient="to-bl" gradientFrom= {"var(--gradient1)"} gradientTo= {"var(--gradient2)"} height={"100vh"} width={"100vw"} justifyContent={"center"} flexDirection={"column"} alignItems={"center"}  gap={"30px"}>
          <Flex justifyContent={"center"} flexDirection={"column"} alignItems={"center"}  gap={{base:"15px",sm:"30px"}} backgroundColor={"#223547"} padding={"20px 30px"} borderRadius={"20px"}> 
            <Image src={Titulo} alt="Titulo"marginTop={{base:"10px",sm:"20px"}} width={{base:"100px",sm:"130px" ,md:"180px"}}/>
            <Box>
              <Field label={label1} color={"white"}>
                <Input placeholder={placeholder1} value={email} onChange={(e) => setemail(e.target.value)} width={{base:"200px",sm:"250px" ,md:"350px"}} borderRadius={"40px"} backgroundColor={"#D9D9D9"} color={"#000000"} fontSize={{base:"10px",sm:"12px", md:"16px"}}/>
              </Field>
              <Field label={label2} color={"white"} marginTop={"10px"}>
                <Input placeholder={placeholder2} value={password} onChange={(e) => setPassword(e.target.value)} type="password" width={{base:"200px",sm:"250px" ,md:"350px"}} borderRadius={"40px"} backgroundColor={"#D9D9D9"} color={"#000000"}/>
              </Field>
            </Box>
            <Button onClick={handleLogin} background={"#2E23A7"}  width={{base:"100px",sm:"250px" ,md:"350px"}} height= {"50px"} borderRadius={"20px"} fontSize={{sm:"18px",md:"24px"}} color={"white"} marginBottom={"-10px"} margin={"10px"} shadow="7px 10px 10px 5px rgba(0, 0, 3, .2)"> 
                Entrar
            </Button>
            <Link to={"forgotPassword"} style={{ color: "gray", textDecoration: "underline" }}>
                {link}
            </Link>
          </Flex>
        </Flex>
      )
}

export default LoginPage;