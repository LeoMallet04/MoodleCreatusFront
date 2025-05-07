import { Flex, Text } from "@chakra-ui/react"
import Circulo from "./Circulo";
import { LanguageColorsDTO } from "./ProjetoList";

interface LanguageBoxProps{
    language: string;
    colorsDTO: LanguageColorsDTO | null;
}

function LanguageBox({language, colorsDTO}: LanguageBoxProps){

    return (
        <Flex
        mb="10px"
        backgroundColor="gray.900"
        height="auto"
        width="auto"
        mr={2}
        p="2px"
        >
            <Circulo language={language} colorsDTO={colorsDTO}>
                
            </Circulo>
            <Text fontSize="xs" fontWeight="bold"
            height="auto"
            width="auto"
            alignSelf="center"
            >
                {language}
            </Text>
        </Flex>
    )

}

export default LanguageBox 