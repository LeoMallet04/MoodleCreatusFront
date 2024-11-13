import NavBar from "@/components/base/NavBar/NavBar";
import Card, { CardProps } from "../../components/base/Card/Card"
import { Box, Flex, Text, Grid } from "@chakra-ui/react";
import SideBar from "@/components/base/SideBarComponent/SideBarComponent";
import { useEffect, useState } from "react";
import axios from 'axios';
function Home() {

    const [cards, setCards] = useState<CardProps[]>([]);
    const token = document.cookie.split('=')[1];
    useEffect(() => {
        axios.get('http://localhost:3000/cards', {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            withCredentials: true
        })
            .then(response => {
                const data = response.data;
                data.sort((a: CardProps, b: CardProps) => {
                    if (a.isBlocked && !b.isBlocked) {
                        return 1;
                    }
                    if (!a.isBlocked && b.isBlocked) {
                        return -1;
                    }
                    return 0;
                });
                setCards(data);
            })
            .catch(error => console.error('Error fetching data: ' + error));
    }, [token]);
    return (
        <Box overflowX={"hidden"}>
            <SideBar />
            <Grid gridTemplateRows={"auto 1fr"} minHeight={{ base: "100%", md: "100vh" }} >
                <NavBar />
                <Flex display={"flex-colum"} backgroundColor={"var(--gradient1)"} width={"100vw"}>
                    <Text fontSize={"30px"} color={"white"} marginTop={"50px"} marginLeft={{ base: "40px", sm: "80px", md: "120px" }}>Home</Text>
                    <Flex my={"20px"} flexWrap={"wrap"} gap={{ base: "50px 80px", md: "80px 100px", xl: "100px 180px" }} color={"white"} marginLeft={{ base: "40px", sm: "80px", md: "120px" }} justifyContent={{ base: "center", sm: "start" }}>

                        {cards.map((card, index) => (
                            <Card key={index} title={card.title} url={card.url} image={card.image} isBlocked={card.isBlocked} ></Card>
                        ))}
                    </Flex>
                </Flex>
            </Grid>
        </Box>

    )
}

export default Home;
