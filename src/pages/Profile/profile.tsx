import { Flex } from "@chakra-ui/react";
import NavBar from "@/components/base/NavBar/NavBar";
import SideBar from "@/components/base/SideBarComponent/SideBarComponent";

function Profile() {
    return (
        <Flex direction="column" height="100vh">
            <NavBar />
            <Flex flex="1" zIndex={10} position={"fixed"} top={0} left={0} height={"100vh"}>
                <SideBar />
                {/* Aqui você pode adicionar o conteúdo principal do perfil */}
            </Flex>
        </Flex>
    );
}

export default Profile;
