import NavBar from "@/components/base/NavBar/NavBar";
import Card from "../../components/base/Card/Card"
import { Flex } from "@chakra-ui/react";
import SideBar from "@/components/base/SideBarComponent/SideBarComponent";


function Home(){
    return(
        <>
        <Flex></Flex>
            <NavBar/>
            <SideBar/>
          <Flex/> 
            <Flex>
                <Card index={0} url={""} image={""}/>
            </Flex>
        </>
    )
}

export default Home;