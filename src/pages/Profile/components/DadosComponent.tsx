import { Flex, Text, Button, Icon } from "@chakra-ui/react";
import { ImShare } from "react-icons/im";

interface DadosComponentProps {
    curso: string;
    email: string;
    github: string;
    faltas: number;
}

function DadosComponent({ curso, email, github, faltas }: DadosComponentProps) {
    return (
        <Flex
            mt={{ base: "30px", md: "40px", lg: "50px" }}
            ml={{ base: "20px", md: "30px", lg: "50px" }}
            width={{ base: "80vw", md: "50vw", lg: "22vw" }}
            height={{ base: "auto", md: "50vh", lg: "45vh" }}
            bg={"rgba(255, 255, 255, 0.12)"}
            borderRadius={"10px"}
            display={"flex"}
            flexDirection={"column"}
            zIndex={1}
            padding={"1.2rem"}
            gap={{ base: "1rem", md: "1.5rem", lg: "2rem" }}
        >
            <Flex
                flexDirection={"row"}
                zIndex={10}
                gap={{ base: "2rem", md: "3rem", lg: "4rem" }}
                fontFamily={"Inter"}
            >
                <Flex
                    flexDirection={"column"}
                    color={"#559DE6"}
                    fontSize={{ base: "10px", md: "11px", lg: "12px" }}
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
                    flexDirection={"column"}
                    color={"white"}
                    fontSize={{ base: "10px", md: "11px", lg: "12px" }}
                    fontFamily={"Inter"}
                    width={"70%"}
                    height={"40%"}
                    gap={"0.5rem"}
                >
                    <Text>{curso}</Text>
                    <Text>{email}</Text>
                    <Text>{github}</Text>
                </Flex>
            </Flex>

            <Flex
                flexDirection={"column"}
                height={"30%"}
                zIndex={10}
                fontFamily={"Inter"}
                alignItems={"center"}
                gap={"0.5rem"}
            >
                <Text color={"white"} fontSize={{ base: "10px", md: "11px", lg: "12px" }}>Faltas</Text>
                <Text color={"#559DE6"} fontSize={{ base: "26px", md: "28px", lg: "30px" }}>{faltas}</Text>
            </Flex>

            <Flex alignContent={"center"} alignItems={"center"}>
                <Button
                    width={"100%"}
                    height={{ base: "4vh", md: "5vh", lg: "5vh" }}
                    bg={"#21262D"}
                    cursor={"pointer"}
                    gap={{ base: "7rem", md: "8rem", lg: "9rem" }}
                >
                    <Text color={"#559DE6"} fontSize={{ base: "10px", md: "11px", lg: "12px" }} fontFamily={"Inter"}>
                        Trocar senha
                    </Text>
                    <Icon fontSize={{ base: "12px", md: "13px", lg: "14px" }}>
                        <ImShare color={"#559DE6"} />
                    </Icon>
                </Button>
            </Flex>
        </Flex>
    );
}

export default DadosComponent;
