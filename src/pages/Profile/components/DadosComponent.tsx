import { Flex, Span } from "@chakra-ui/react";

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
                    <Span>Curso</Span>
                    <Span>Email</Span>
                    <Span>GitHub</Span>
                </Flex>

                <Flex
                    display={"flex"}
                    flexDirection={"column"}
                    color={"white"} 
                    width={"70%"}
                    height={"40%"}   
                >
                    <Span>Engenharia de Software</Span>
                    <Span>exemplo@gmail.com</Span>
                    <Span>Username</Span>
                </Flex>

            </Flex>

            <Flex
                display={"flex"}
                flexDirection={"column"}
                color={"white"}
                height={"30%"}
                zIndex={10}
            >
                <Span color={"white"}>Faltas</Span>
                <Span color={"#559DE6"}>3</Span>
            </Flex>

            <Flex>
                
            </Flex>



        </Flex>
    )
}

export default DadosComponent;