import NavBar from "@/components/base/NavBar/NavBar";
import Card from "../../components/base/Card/Card"
import { Flex } from "@chakra-ui/react";
import SideBar from "@/components/base/SideBarComponent/SideBarComponent";


function Home(){
    return(
        <>
        <Flex  >
            <SideBar/>

            <NavBar/>
            
        </Flex>
            <Flex margin={"200px"} >
                <Card index={1} url={""} image={""}/>
                <Card index={2} url={""} image={""}/>
                <Card index={3} url={""} image={""}/>
                <Card index={4} url={""} image={""}/>
                <Card index={5} url={""} image={""}/>
             </Flex>
         
        </>
    )
}

export default Home;