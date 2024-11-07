import DadosComponent from "./components/DadosComponent";
import { Flex } from "@chakra-ui/react";


function Profile(){
    return(
        <Flex
        minWidth={"100vw"}
        minHeight={"100vh"}
        bg={"#021823"}
        >
            <DadosComponent></DadosComponent>
        </Flex>
    )
}

export default Profile;