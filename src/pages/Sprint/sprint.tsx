import { Grid, Flex, Box, Text } from "@chakra-ui/react";
import NavBar from "@/components/base/NavBar/NavBar";
import SideBar from "@/components/base/SideBarComponent/SideBarComponent";
import Card from "@/components/base/Card/Card";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from "swiper/modules"; // Importando Autoplay
import "swiper/swiper-bundle.css";

function Sprint() {
    return (
        <Flex
            minHeight="100vh"
            width="100%"
            flexDirection="column"
            bgGradient="to-bl"
            gradientFrom="var(--gradient1)"
            gradientTo="var(--gradient2)"
        >
            <SideBar />
            <Grid gridTemplateRows="auto 1fr" height="100%">
                <NavBar />
                <Grid
                    fontFamily="'Poppins', sans-serif"
                    gridTemplateRows="0.9fr 0.1fr 0.5fr 0.14fr 1fr auto"
                    paddingLeft="12%"
                    maxWidth="75%"
                >
                    <Box paddingTop="1%">
                        <Text fontSize="2em">Calculadora Web</Text>
                        <Text fontSize="1em">
                            Neste projeto, vamos criar uma calculadora funcional usando JavaScript, HTML e CSS. Ela permitirá operações básicas,
                            como adição, subtração, multiplicação e divisão, com uma interface simples e interativa. Essa calculadora é ideal
                            para introduzir manipulação de eventos e lógica de programação, além de consolidar conhecimentos em desenvolvimento web.
                        </Text>
                    </Box>
                    <Text backgroundColor="white" width="70vw" height="0.1vh" marginBottom="1vh" padding="0"></Text>
                    <Box marginBottom="0">
                        <Text fontSize="2em">Projeto</Text>
                        <Text fontSize="1em">Projeto.pdf</Text>
                    </Box>
                    <Box backgroundColor="white" width="70vw" height="0.1vh" marginTop="1vh"></Box>
                    <Box>
                        <Text fontSize="2em">Materiais</Text>
                        <Box width="75vw"  marginTop="1vh">
                            <Swiper
                                spaceBetween={"10%"} // Espaço entre slides
                                modules={[Navigation, Autoplay]} // Adicionando Autoplay ao Swiper
                                slidesPerView={3}
                                navigation
                                autoplay={{ delay: 3000, disableOnInteraction: false }} // Configurações de autoplay
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}
                                style={{ overflow: "hidden" }} // Garantir que o swiper não afeta o layout externo
                            >
                                <SwiperSlide>
                                    <Card title="HTML em 48 horas" url="https://youtube.com" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card title="CSS Básico" url="https://youtube.com" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card title="JavaScript para Iniciantes" url="https://youtube.com" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card title="JavaScript para Iniciantes" url="https://youtube.com" />
                                </SwiperSlide>
                                
                                
                            </Swiper>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Flex>
    );
}

export default Sprint;