import { Avatar } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";
import { Flex } from "@chakra-ui/react";

function NavBar(){
    return(
        <Flex backgroundColor={"var(--blue)"} height={"60px"} justifyContent={"end"} paddingRight={"30px"} width={"100%"}>
            <Switch paddingRight={"20px"}></Switch>
            <Avatar marginTop= "10px" name="E U" src="request do back" />
        </Flex>
    )    
}

export default NavBar;