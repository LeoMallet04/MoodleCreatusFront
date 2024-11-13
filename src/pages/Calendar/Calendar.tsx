import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { Box, Flex, Grid } from "@chakra-ui/react";
import NavBar from "@/components/base/NavBar/NavBar";
import SideBar from "@/components/base/SideBarComponent/SideBarComponent";

function Calendar() {
  return (
    <Flex
      height={"100vh"}
      width={"100vw"}
      bgGradient="to-bl"
      gradientFrom={"var(--gradient1)"}
      gradientTo={"var(--gradient2)"}
    >
      <SideBar />
      <Grid gridTemplateRows={"auto 1fr"}>
        <NavBar />
        <Box width={"50vw"} justifySelf={"center"} marginTop={"30px"}>
          <FullCalendar
            height={"80vh"}
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            dayHeaderFormat={{ weekday: 'narrow' }}
            events={[]}
          />
        </Box>
      </Grid>
    </Flex>
  );
}

export default Calendar;