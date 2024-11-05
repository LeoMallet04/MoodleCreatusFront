import { Flex, Text, Image, Button } from "@chakra-ui/react";
import logoGrupo from "../../assets/images/logo-grupo.svg";
import creatus from "../../assets/images/logo-creatus.svg";
import ages from "../../assets/images/logo-ages.svg";

function LandingPage(){
    return(
        <Flex height={"100vh"} width={"100vw"} bgGradient="to-l" gradientFrom={"#191134"} gradientTo={"#15203C"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
            <Image src={logoGrupo} width={{base:"250px",sm:"400px" ,md: "600px"}}></Image>
            <Flex alignItems={"center"} marginTop={"10px"} gap={{base:"10px",sm:"15px",md:"20px"}}>
                <Text fontSize={{base:"12px",md:"16px"}}>Powered by:</Text>
                <Image src={creatus} width={{base:"60px" ,sm:"80px" ,md:"120px"}}  style={{ objectFit: "contain" }}></Image>
                <Image src={ages} width={{base:"60px" ,sm:"80px" ,md:"120px"}} ></Image>
            </Flex>
            <Text maxWidth={{base:"200px",sm:"350px",md:"500px"}} margin={"30px 0"} fontSize={{base:"14px",sm:"16px",md:"20px"}}>Com objetivo de desenvolver e aprofundar os conhecimentos de programação, em particular desenvolvimento Web Frontend e Backend, bem como trabalhar soft skills que são necessárias para se destacar no mercado de trabalho, como proatividade, trabalho em equipe e gestão de tempo.</Text>
            <Flex gap={{base:"20px",sm:"40px"}} flexDirection={{base: "column", sm:"row"}}>
                <Button backgroundColor={"var(--blue)"} color={"white"} padding={"20px 40px"} width={"150px"}>Entrar</Button>
                <Button backgroundColor={"transparent"} border={"2px solid white"} color={"white"} padding={"20px 40px"} width={"150px"}>Inscreva-se</Button>
            </Flex>
        </Flex>
    )
}

export default LandingPage;