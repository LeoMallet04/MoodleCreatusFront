import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { Box, Flex, Grid } from "@chakra-ui/react";
import NavBar from "@/components/base/NavBar/NavBar";
import SideBar from "@/components/base/SideBarComponent/SideBarComponent";
import { useEffect, useState } from "react";
import { EventSourceInput } from "@fullcalendar/core/index.js";
import axios from "axios";


type Evento = {
  title: string,
  start_date: string, //TRATANDO DATE COMO STRING, POR ALGUM MOTIVO O REACT NAO DEIXA USAR FUNCOES DE DATE
  end_date: string, //NO FUTURO TIRAR A GAMBIARRA DO SLICE() E MUDAR ISSO TD P DATE
}

function Calendar() {

  const [events, setEvents] = useState<EventSourceInput>([]);
  const token = document.cookie.split('=')[1];

  useEffect(() => {
    axios.get('http://localhost:3000/event/upcoming/now', {
      withCredentials: true,
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(res => {
        const data = res.data;
        data.forEach((event: Evento, index: number) => {
          if (event.start_date == event.end_date) {
            data[index] = {
              title: event.title,
              date: event.start_date.slice(0, event.start_date.indexOf('T'))
            }
          } else {
            data[index] = {
              title: event.title,
              start: event.start_date.slice(0, event.start_date.indexOf('T')),
              end: event.end_date.slice(0, event.start_date.indexOf('T'))
            }
          }
        })
        setEvents(data);
        console.log(events);
      })
  }, [])

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
          locale={'pt-br'}
            height={"80vh"}
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            events={events}
            dayHeaderFormat={{ weekday: 'narrow' }}
          />
        </Box>
      </Grid>
    </Flex>
  );
}

export default Calendar;
