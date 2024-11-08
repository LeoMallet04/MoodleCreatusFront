import { Flex } from "@chakra-ui/react";
import DadosComponent from "./components/DadosComponent";


function Profile(){
    return(
        <Flex>
<DadosComponent 
    curso="Engenharia de Software" 
    email="exemplo@gmail.com" 
    github="Username" 
    faltas={3} 
/>

        </Flex>
        
    )
}

export default Profile;