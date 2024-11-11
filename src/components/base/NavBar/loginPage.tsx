import { Box, Flex, Image, Input } from "@chakra-ui/react"
import { Field } from "@/components/ui/field"
/* import { Button } from "@/components/ui/button"; */
import { Link } from "react-router-dom";
import Titulo from "@/assets/GRUPO DE ESTUDOS.svg";
/* import { useNavigate } from "react-router-dom"; */

function LoginPage({link,label1,placeholder1,label2,placeholder2}:{link:string,label1:string,placeholder1:string,label2:string,placeholder2:string}){
    /* const navigate= useNavigate(); */
    return (
        <Flex bgGradient="to-bl" gradientFrom= {"var(--gradient1)"} gradientTo= {"var(--gradient2)"} height={"100vh"} width={"100vw"} justifyContent={"center"} flexDirection={"column"} alignItems={"center"}  gap={"30px"}>
          <Flex justifyContent={"center"} flexDirection={"column"} alignItems={"center"}  gap={{base:"15px",sm:"30px"}} backgroundColor={"#223547"} padding={"20px 30px"} borderRadius={"20px"}> 
            <Image src={Titulo} alt="Titulo"marginTop={{base:"10px",sm:"20px"}} width={{base:"100px",sm:"130px" ,md:"180px"}}/>
            <Box>
              <Field label={label1} color={"white"}>
                <Input placeholder={placeholder1} width={{base:"200px",sm:"250px" ,md:"350px"}} borderRadius={"40px"} backgroundColor={"#D9D9D9"} color={"#000000"} fontSize={{base:"10px",sm:"12px", md:"16px"}}/>
              </Field>
              <Field label={label2} color={"white"} marginTop={"10px"}>
                <Input placeholder={placeholder2} type="password" width={{base:"200px",sm:"250px" ,md:"350px"}} borderRadius={"40px"} backgroundColor={"#D9D9D9"} color={"#000000"}/>
              </Field>
            </Box>
            <Link to={"forgotPassword"} style={{ color: "gray", textDecoration: "underline" }}>
                {link}
            </Link>
          </Flex>
        </Flex>
      )
}

export default LoginPage;