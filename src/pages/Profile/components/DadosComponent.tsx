import { Flex, Text, Button, Icon } from "@chakra-ui/react";
import { ImShare } from "react-icons/im";

function DadosComponent(){
    return(
        <Flex
            mt={"50px"}
            ml={"50px"}
            width={"22vw"}
            height={"45vh"}
            bg={"rgba(255, 255, 255, 0.12)"} 
            borderRadius={"10px"}
            display={"flex"}
            flexDirection={"column"}
            zIndex={1}
            padding={"1.2rem"}
            gap={"2rem"}
        >
            <Flex
                display={"flex"}
                flexDirection={"row"}
                zIndex={10}
                gap={"4rem"}
                fontFamily={"Inter"}
            >
                <Flex
                    display={"flex"}
                    flexDirection={"column"}  
                    color={"#559DE6"}
                    fontSize={"12px"}
                    fontFamily={"Inter"} 
                    width={"30%"}
                    height={"40%"}
                    gap={"0.5rem"} 
                >
                    <Text>Curso</Text>
                    <Text>Email</Text>
                    <Text>GitHub</Text>
                </Flex>

                <Flex
                    display={"flex"}
                    flexDirection={"column"}
                    color={"white"} 
                    fontSize={"12px"}
                    fontFamily={"Inter"}
                    width={"70%"}
                    height={"40%"}
                    gap={"0.5rem"}   
                >
                    <Text>Engenharia de Software</Text>
                    <Text>exemplo@gmail.com</Text>
                    <Text>Username</Text>
                </Flex>
            </Flex>

            <Flex
                display={"flex"}
                flexDirection={"column"}
                height={"30%"}
                zIndex={10}
                fontFamily={"Inter"}
                alignItems={"center"}
                gap={"0.5rem"}
            >
                <Text color={"white"} fontSize={"12px"}>Faltas</Text>
                <Text color={"#559DE6"} fontSize={"30px"}>3</Text>
            </Flex>

            <Flex
                alignContent={"center"}
                alignItems={"center"}
            >
                <Button
                    width={"100%"}
                    height={"5vh"}
                    bg={"#21262D"}
                    cursor={"pointer"}
                    gap={"9rem"}
                >
                    <Text color={"#559DE6"} fontSize={"12px"} fontFamily={"Inter"}>Trocar senha</Text>
                    <Icon fontSize={"14px"}>
                    <ImShare color={"#559DE6"}/>
                    </Icon>
                </Button>
            </Flex>
        </Flex>
    )
}

export default DadosComponent;
