import { Flex } from "@chakra-ui/react";
import NavBar from "@/components/base/NavBar/NavBar";
import SideBar from "@/components/base/SideBarComponent/SideBarComponent";

function Profile() {
    return (
        <Flex direction="column" height="100vh">
            <NavBar />
            <Flex flex="1">
                <SideBar />
                {/* Aqui você pode adicionar o conteúdo principal do perfil */}
            </Flex>
        </Flex>
    );
}

export default Profile;
