import { Box } from "@chakra-ui/react/box";
import { Flex } from "@chakra-ui/react/flex";

function Card(){
    return(
        <Flex backgroundColor={"gray"} width={"250px"} height={"150px"} alignItems={"end"} borderRadius={"10px"}>
            <Box backgroundColor={"#4C30E8"} width={"250px"} height={"35px"} textAlign={"center"} paddingTop={"5px"} borderRadius={"0px 0px 10px 10px"}>
            <h1>Sprint X</h1>
            </Box>
        </Flex>
    )
}

export default Card;