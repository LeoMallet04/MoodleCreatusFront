import { Box } from "@chakra-ui/react/box";
import { Flex } from "@chakra-ui/react/flex";
import { useNavigate } from "react-router-dom";
import { Image } from "@chakra-ui/react";
import cadeado from "../../../assets/icons/cadeado.png";
import Textura from "../../../assets/images/Textura.png";
import { useState } from "react";


export interface CardProps {
    title: string;
    url: string;
    isBlocked?: boolean;
    image: string;
}


function Card({ title, url, isBlocked = false, image }: CardProps) {


    const navigate = useNavigate();
    const [hover, setHover] = useState(false);



    function handleClick() {
        if (isBlocked) return
        window.location.href = url;
        //navigate(url);
    };

    return (
        <Flex

            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            transition={"0.3s"}
            style={{ transform: hover ? "scale(1.1)" : "scale(1)" }}
            backgroundImage={`url(${image ? (isBlocked ? Textura : image) : Textura})`}
            width={{ base: "180px", sm: "200px", md: "250px" }}
            height={{ base: "100px", sm: "120px", md: "150px" }}
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
                style={{ display: isBlocked ? "flex" : "none" }}
            >
                <Image src={cadeado}></Image>
            </Flex>
        </Flex>
    );
}

export default Card;