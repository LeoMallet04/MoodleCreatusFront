import { Box } from "@chakra-ui/react/box";
import { Flex } from "@chakra-ui/react/flex";
import { useNavigate } from "react-router-dom";
import { Image } from "@chakra-ui/react";
import cadeado from "../../../assets/icons/cadeado.png";

interface CardProps {
    index: number;
    url: string;
    isBlocked: boolean;
    image: string;
}

function Card({ index, url, isBlocked, image }: CardProps) {
    const navigate = useNavigate();

    const handleClick = () => {
        if (!isBlocked) {
            navigate(url);
        }
    };


    return (
        <Flex
            backgroundImage={`url(${image})`}
            width={"250px"}
            height={"150px"}
            alignItems={"end"}
            borderRadius={"10px"}
            onClick={handleClick}
            cursor={isBlocked ? "not-allowed" : "pointer"}
            position={"relative"}
        >
            <Box
                backgroundColor={"#4C30E8"}
                width={"250px"}
                height={"35px"}
                textAlign={"center"}
                paddingTop={"5px"}
                borderRadius={"0px 0px 10px 10px"}
            >
                <h1>Sprint {index}</h1>
            </Box>
            <Flex position={"absolute"} top={0} left={0} backgroundColor={"#ADADAD70"} height={"100%"} width={"100%"} justifyContent={"center"} alignItems={"center"} borderRadius={"10px"} style={{display: isBlocked ? "flex" : "none"}}>
                <Image src={cadeado}></Image>
            </Flex>
        </Flex>
    );
}

export default Card;