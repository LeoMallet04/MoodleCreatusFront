import { Flex, Text } from "@chakra-ui/react";

function DadosComponent(){
    return(
        <Flex
            mt={"50px"}
            ml={"50px"}
            width={"22vw"}
            height={"45vh"}
            bg={"#FFFFFF"}
            opacity={"12%"}
            borderRadius={"10px"}
            display={"flex"}
            flexDirection={"column"}
            zIndex={1}
        >
            <Flex
                display={"flex"}
                flexDirection={"row"}
                zIndex={10}
            >
                <Flex
                    display={"flex"}
                    flexDirection={"column"}  
                    color={"#559DE6"} 
                    width={"30%"}
                    height={"40%"} 
                >
                    <Text>Curso</Text>
                    <Text>Email</Text>
                    <Text>GitHub</Text>
                </Flex>

                <Flex
                    display={"flex"}
                    flexDirection={"column"}
                    color={"white"} 
                    width={"70%"}
                    height={"40%"}   
                >
                    <Text>Engenharia de Software</Text>
                    <Text>exemplo@gmail.com</Text>
                    <Text>Username</Text>
                </Flex>

            </Flex>

            <Flex
                display={"flex"}
                flexDirection={"column"}
                color={"white"}
                height={"30%"}
                zIndex={10}
            >
                <Text color={"white"}>Faltas</Text>
                <Text color={"#559DE6"}>3</Text>
            </Flex>

            <Flex>
                
            </Flex>



        </Flex>
    )
}

export default DadosComponent;