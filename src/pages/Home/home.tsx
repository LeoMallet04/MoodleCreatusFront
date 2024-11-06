import NavBar from "@/components/base/NavBar/NavBar";
import Card from "../../components/base/Card/Card"
import { Box, Flex } from "@chakra-ui/react";
import SideBar from "@/components/base/SideBarComponent/SideBarComponent";


function Home(){
    return(
        <>
       
        
        <Flex  >
        <SideBar/>

        
          
        <NavBar/>
       
        

          
           
           
        </Flex>
        <Box display={"flex"} marginTop={"-500px"} marginLeft={"100px"}>
                 <Card index={1} url={""} image={""}/>
                <Card index={2} url={""} image={""}/>
                <Card index={3} url={""} image={""}/>
                <Card index={4} url={""} image={""}/>
                <Card index={5} url={""} image={""}/>
        </Box>
        
     
         
        </>
    )
}

export default Home;