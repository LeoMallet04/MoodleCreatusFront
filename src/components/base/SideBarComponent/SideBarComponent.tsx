import './SideBarComponent.css'
import { Flex } from "@chakra-ui/react";
import { HamburgerIcon } from '@chakra-ui/icons';

function SideBar(){
    return (
        <Flex className="sidebar">
            <Flex className="logo">
               <HamburgerIcon boxSize={6} color="white" marginRight={2}/>
            </Flex>
            <Flex className="buttons">
                <button className="home">
                    <Flex align="center">
                    
                        <text className="hometext">Home</text>
                    </Flex>
                </button>
                <button className="faq">
                    <text className="faqtext">FAQ</text>
                </button>
            </Flex>
        </Flex>
    );
}

export default SideBar;
