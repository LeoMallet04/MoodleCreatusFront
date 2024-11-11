import NavBar from "@/components/base/NavBar/NavBar";
import Card, { CardProps } from "../../components/base/Card/Card"
import { Box, Flex, Text, Grid } from "@chakra-ui/react";
import SideBar from "@/components/base/SideBarComponent/SideBarComponent";
import { useEffect, useState } from "react";

function Home() {

    const [cards, setCards] = useState<CardProps[]>([]);

    useEffect(() => {
        fetch('http://localhost:3000/cards')
            .then(res => res.json())
            .then(data => {
                data.sort((a: CardProps, b: CardProps) => {
                    if (a.isBlocked && !b.isBlocked) {
                        return 1;
                    }
                    if (!a.isBlocked && b.isBlocked) {
                        return -1;
                    }
                })
                setCards(data)
            })
            .catch((error) => console.error('Error fetching data: ' + error));
    }, [])


    return (

        <Box >
            <NavBar />

            <Grid gridTemplateColumns={"auto 1fr"}>
                <SideBar />
                <Flex display={"flex-colum"} backgroundColor={"var(--gradient1)"} >
                    <Text fontSize={"30px"} color={"white"} fontWeight={"400px"} marginTop={"100px"} marginLeft={"120px"}>Home</Text>

                    <Flex my={"10"} flexWrap={"wrap"} gap={"180px"} rowGap={"100px"} color={"white"} marginLeft={"120px"}>

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