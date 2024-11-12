import { Grid, Flex, Box,Text } from "@chakra-ui/react";
import NavBar from "@/components/base/NavBar/NavBar";
import SideBar from "@/components/base/SideBarComponent/SideBarComponent";
import Card from "@/components/base/Card/Card"
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation} from "swiper/modules"
import "../../../node_modules/swiper/swiper-bundle.css";




function Sprint(){
    return(
        
            <Flex height={"100%"} width={"100%"} flexDirection={"column"} bgGradient={"to-bl"} gradientFrom={"var(--gradient1)"} gradientTo={"var(--gradient2)"}>
                <SideBar></SideBar>
                <Grid gridTemplateRows={"auto 1fr"} height={"100vh"}>
                    <NavBar></NavBar>
                    <Grid fontFamily={"'Poppins',sans-serif"} gridTemplateRows={"0.6fr 0.08fr 0.34r 0.07fr 1fr auto"} paddingLeft={"12%"} maxWidth={"75%"}>
                            <Box paddingTop={"1%"} >
                                <Text fontSize={"2rem"}>Calculadora Web</Text >
                                <Text fontSize={"1rem"}>Neste projeto, vamos criar uma calculadora funcional usando JavaScript, HTML e CSS. Ela permitirá operações básicas, 
                                    como adição, subtração, multiplicação e divisão, com uma interface simples e interativa. Essa calculadora é ideal 
                                    para introduzir manipulação de eventos e lógica de programação, além de consolidar conhecimentos em desenvolvimento web.
                                </Text>
                            </Box>
                            <Text backgroundColor={"white"} width={"70vw"} height={"0.1vh"} marginBottom={"1vh"} padding={"0"} ></Text>
                            <Box  marginBottom={"0"}>
                                <Text fontSize={"2rem"}>
                                    Projeto
                                </Text>
                                <Text fontSize={"1rem"}>Projeto.pdf
                                </Text>
                            </Box>
                            <Box backgroundColor={"white"} width={"70vw"} height={"0.1vh"} marginTop="1vh" ></Box>
                            <Box  >
                                <Text fontSize={"2rem"}> Materiais</Text>
                                <Box>
                                <Swiper
                                    spaceBetween={1}
                                    modules={[Navigation]}
                                    slidesPerView={4}
                                    navigation
                                    onSlideChange={() => console.log('slide change')}
                                    onSwiper={(swiper) => console.log(swiper)}
                                
                                    >
                                    <SwiperSlide>
                                        <Card  title={"html em 48 horas"} url={"youtube.com"} >
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card  title={"html em 48 horas"} url={"youtube.com"} >
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card  title={"html em 48 horas"} url={"youtube.com"} >
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card  title={"html em 48 horas"} url={"youtube.com"} >
                                        </Card>
                                    </SwiperSlide>
                                    
                                
                                    </Swiper>
                                    </Box>  
                            </Box>
                        </Grid>

                </Grid>
            </Flex>
           
    )
}

export default Sprint;