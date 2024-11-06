import NavBar from "@/components/base/NavBar/NavBar";
import Card from "../../components/base/Card/Card"
import { Box, Flex, Text } from "@chakra-ui/react";
import SideBar from "@/components/base/SideBarComponent/SideBarComponent";


function Home(){
    return(
        <Box>    
            <Flex >
                <SideBar/>  
                <NavBar/>
            </Flex>
            <Box display={"flex-colum"} marginTop={"-500px"} marginLeft={"100px"}>
                <Text color={"black"}>Home</Text>

                <Box display={"flex"} my={"10"}>
                    <Card index={1} url={""} image={""}/>
                    <Card index={2} url={""} image={""}/>
                    <Card index={3} url={""} image={""}/>
                    <Card index={4} url={""} image={""}/>
                    <Card index={5} url={""} image={""}/>
                </Box>
            </Box>
        </Box>
    )
}

export default Home;