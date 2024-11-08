import NavBar from "@/components/base/NavBar/NavBar";
import Card from "../../components/base/Card/Card"
import { Box, Flex, Text,Grid } from "@chakra-ui/react";
import SideBar from "@/components/base/SideBarComponent/SideBarComponent";


function Home(){
    return(
        
        <Box > 
            <NavBar/>

            <Grid gridTemplateColumns={"auto 1fr"}>
                <SideBar/>
                <Flex display={"flex-colum"} backgroundColor={"var(--gradient1)"} >
                    <Text fontSize={"30px"} color={"white"} fontWeight={"400px"} marginTop={"100px"} marginLeft={"120px"}>Home</Text>

                    <Flex my={"10"} flexWrap={"wrap"} gap={"180px"} rowGap={"100px"} color={"white"}  marginLeft={"120px"}>

                    
                        <Card index={1} url={""} image={""}/> 

                        <Card isBlocked index={2} url={""} image={""}/> 

                        <Card isBlocked index={3} url={""} image={""}/> 

                        <Card isBlocked index={4} url={""} image={""}/> 
                        
                        <Card isBlocked index={5} url={""} image={""}/> 
                    
                    </Flex>
                </Flex>
            </Grid>
            
        </Box>
    
    )
}

export default Home;