import { Box } from "@chakra-ui/react/box";
import { Flex } from "@chakra-ui/react/flex";
import { useNavigate } from "react-router-dom";
import { Image } from "@chakra-ui/react";
import cadeado from "../../../assets/icons/cadeado.png";
import Textura from "../../../assets/images/Textura.png";

interface CardProps {
    title : string;
    url: string;
    isBlocked?: boolean;
}

function Card({ url, isBlocked = false,title }: CardProps) {

    const navigate = useNavigate();

    function handleClick() {
        if (isBlocked) return
        window.location.href = url;
        //navigate(url);
    };

    return (
        <Flex
            backgroundImage={Textura}
            width={"250px"}
            height={"150px"}
            alignItems={"end"}
            borderRadius={"10px"}
            onClick={handleClick}
            cursor={isBlocked ? "not-allowed" : "pointer"}
            position={"relative"}
        >
            <Box
                backgroundColor={"#2E23A7"}
                width={"250px"}
                height={"35px"}
                textAlign={"center"}
                paddingTop={"5px"}
                borderRadius={"0px 0px 10px 10px"}
            >
                <h1>{title}</h1>
            </Box>
            <Flex
                position={"absolute"}
                top={0}
                left={0}
                backgroundColor={"#9989B4B3"}
                height={"100%"}
                width={"100%"}
                justifyContent={"center"}
                alignItems={"center"}
                borderRadius={"10px"}
                pb={"35px"}
                style={{display: isBlocked ? "flex" : "none"}}
            >
                <Image src={cadeado}></Image>
            </Flex>
        </Flex>
    );
}

export default Card;