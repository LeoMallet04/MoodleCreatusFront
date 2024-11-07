import { Flex, HStack, Stack, Text } from "@chakra-ui/react";
import { Avatar } from "@/components/ui/avatar";
import SideBar from "@/components/base/SideBarComponent/SideBarComponent";
import NavBar from "@/components/base/NavBar/NavBar";

const authenticatedUser = {
    id: "1",
    name: "Nome Usuario",
    email: "email@example.com",
    avatar: "",
};

const Profile = () => {
    return (
        <Flex direction={"column"} width={"100vw"} height={"100vh"} overflowX="hidden">
            <NavBar />
            <Flex flex="1" zIndex={1} position="fixed" top={0} left={0} height="100vh">
                <SideBar />
                <Flex
                    position="relative"
                    top={14}
                    left={0}
                    width="100vw"
                    height="100vh"
                    bg={"#021823"}
                    zIndex={1}
                />
                <Flex
                    flex="1"
                    zIndex={10}
                    position="fixed"
                    top={40}
                    left={60}
                    alignItems="center"
                >
                    <HStack gap="4" align="center">
                        <Avatar
                            name={authenticatedUser.name}
                            size="lg"
                            src={authenticatedUser.avatar}
                            style={{
                                width: '22vh',
                                height: '22vh'
                            }} />
                        <Stack gap="0">
                            <Text
                                color='#C2CFD9'
                                width='222vh'
                                height='4vw'
                                justifyContent='center'
                                alignItems='center'
                                fontWeight='bold'
                                fontFamily='Inter'
                                fontSize='1.5rem'
                            >
                                {authenticatedUser.name}
                            </Text>
                        </Stack>
                    </HStack>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Profile;
