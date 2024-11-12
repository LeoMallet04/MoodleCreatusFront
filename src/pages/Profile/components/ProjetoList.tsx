import {Badge, Box, Grid, GridItem, HStack, Text } from "@chakra-ui/react";
import {
    AccordionItem,
    AccordionItemTrigger,
    AccordionRoot,
  } from "@/components/ui/accordion"
import AddComponent from "./AddComponent";
  

interface Project {
    title: string;
    description: string;
    languages: string[];
}

interface ProjetoListProps {
    handleAccordionClick: () => void;
    showCards: boolean;
}

const projects: Project[] = [
   {title: "Projeto 1", description: "Descrição do projeto 1", languages: ["Python", "JavaScript"]},
];


const addProject = (title: string, description: string, languages: string[]): void => {
    projects.push({ title, description, languages });
};

function ProjetoList({ handleAccordionClick, showCards }: ProjetoListProps) {
    return (
        <GridItem marginBottom={"50%"}>
            <Text fontFamily="Inter" fontWeight="bold" top={"100"} fontSize={{ base: "1.25rem", md: "1.5rem" }} color="#FFFFFF">
                Meus Projetos
            </Text>
            <AccordionRoot collapsible defaultValue={["a"]}>
                <AccordionItem
                    value="a"
                    width={{ base: "100%", md: "50%" }}
                    height={"30px"}
                    border={"0rem solid rgba(255, 255, 255, 0.12)"}
                    borderRadius={"1rem"}
                    mb={"4"}
                    p={"2"}
                    bg={"rgba(255, 255, 255, 0.05)"}
                >
                    <AccordionItemTrigger onClick={handleAccordionClick} pt={"-20"}>

                    </AccordionItemTrigger>
                </AccordionItem>
            </AccordionRoot>

            {showCards && (
                <Grid
                    templateColumns={{ base: "1fr", sm: "repeat(1fr)", lg: "repeat(1fr)" }}
                    gap={6}
                    mt={4}
                    height={"0px"}
                    width={"50%"}
                >
                    {projects.map((project, index) => (
                        <Box
                            key={index}
                            pl={4}
                            pt={3}
                            h={"120px"}
                            borderRadius="lg"
                            bg="rgba(255, 255, 255, 0.05)"
                            borderColor="rgba(255, 255, 255, 0.12)"
                        >
                            <Text fontFamily="Inter" fontWeight="bold" fontSize="xl" color="#4175A6" mb={2}>
                                {project.title} 
                            </Text>
                            <Text fontFamily="Inter" fontSize="small" color="#C2CFD9" mb={4}>
                                {project.description}
                            </Text>
                            <HStack>
                                {project.languages.map((language, i) => (
                                    <Badge key={i} colorScheme="purple">
                                        {language}
                                    </Badge>
                                ))}
                            </HStack>

                            <AddComponent></AddComponent>
                        </Box>
                    ))}
                </Grid>
            )}
        </GridItem>
        );
    }


export default ProjetoList;       