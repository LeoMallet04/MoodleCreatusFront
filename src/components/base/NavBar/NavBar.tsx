import { Avatar } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";
import { Flex, Image, Grid, Box } from "@chakra-ui/react";
import logoGrupo from "@/assets/images/logo-grupo.svg";
import { useNavigate } from "react-router-dom";


function NavBar() {
    const navigate = useNavigate();

  return (
    <Box width={"100vw"} background={"white"} position={"absolute"} top={0} left={0}>
      < Grid
        backgroundColor={"var(--gradient1)"}
        height={"60px"}
        paddingRight={{base:"10px",sm:"30px"}}
        width={"100%"}
        gridTemplateColumns={"1fr 1fr 1fr"}
        borderBottom={"2px solid black"}
        boxShadow={"0px 4px 4px #00000040"}
      >
        <Image
          src={logoGrupo}
          width={{ base: "150px", sm: "200px", md: "250px" }}
          style={{ objectFit: "contain" }   }
          justifySelf={"center"}
          alignSelf={"center"}
          gridColumn={2}
        />
        <Flex justifySelf={"end"} alignItems={"center"} gridColumn={3} gap={{base:"10px",sm:"20px"}}>
          <Switch size={{base:"xs",sm:"md"}}></Switch>
          <Avatar name="E U" src="request do back" width={{base:"30px",sm:"40px"}} height={{base:"30px",sm:"40px"}} onClick={() => { navigate("/profile") }} cursor={"pointer"}/>
        </Flex>
      </Grid>
    </Box>
  );
}

export default NavBar;
