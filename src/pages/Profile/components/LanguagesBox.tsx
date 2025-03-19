import { Flex, Text } from "@chakra-ui/react"

interface LanguageBoxProps{
    language: string
}

function LanguageBox({language}: LanguageBoxProps){
    return (
        <Flex
        mb="10px"
        >
            <Text fontSize="xs" fontWeight="bold"
            height="auto"
            width="auto"
            p="2px"
            backgroundColor="gray.900"
            mr={2}
            >
                {language}
            </Text>
        </Flex>
    )

}

export default LanguageBox 