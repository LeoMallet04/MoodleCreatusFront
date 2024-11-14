import { Grid, Flex, Box, Text } from "@chakra-ui/react";
import NavBar from "@/components/base/NavBar/NavBar";
import SideBar from "@/components/base/SideBarComponent/SideBarComponent";
import Card from "@/components/base/Card/Card";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from "swiper/modules"; // Importando Autoplay
import "swiper/swiper-bundle.css";
import { useEffect, useState } from "react";
import axios from "axios";

interface SprintInfo {
    title: string;
    description?: string;
    url?: string;
    material?: Material[];
}

type Material = {
    name: string;
    url: string;
}

function Sprint() {
    const urlParams = new URLSearchParams(window.location.search);
    const sprint = urlParams.get('sprint');



    const [sprintInfo, setSprintInfo] = useState<SprintInfo>();

    useEffect(() => {
        axios.get(`http://localhost:3000/cards/${sprint}`, {
            headers: {
                'Content-Type': 'application/json'
            }, withCredentials: true
        }).then(response => {
            setSprintInfo(response.data);
        }).catch(error => console.error('Error fetching data: ' + error));
    }, [sprint]);

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
                    gridTemplateRows="0.9fr 0.1fr 0.5fr 0.07fr 1fr auto"
                    paddingLeft="12%"
                    maxWidth="75%"
                >
                    <Box paddingTop="1%">
                        <Text fontSize="2em">{sprintInfo?.title}</Text>
                        <Text fontSize="1em">
                            {sprintInfo?.description}
                        </Text>
                    </Box>
                    <Text backgroundColor="white" width="70vw" height="0.1vh" marginBottom="1vh" padding="0"></Text>
                    <Box marginBottom="0">
                        <Text fontSize="2em">Projeto</Text>
                        <Text fontSize="1em"><a href={sprintInfo?.url}>PDF da sprint</a></Text>
                    </Box>
                    <Box backgroundColor="white" width="70vw" height="0.1vh" marginTop="1vh"></Box>
                    <Box>
                        <Text fontSize="2em">Materiais</Text>
                        <Box width="75vw" marginTop="1vh" paddingRight={'50px'}>
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

                                {sprintInfo?.material?.map((material, index) => (
                                    <SwiperSlide key={index}>
                                        <Card title={material.name} url={material.url} />
                                    </SwiperSlide>
                                ))}

                            </Swiper>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Flex>
    );
}

export default Sprint;