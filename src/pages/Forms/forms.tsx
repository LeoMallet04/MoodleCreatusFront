import { PaginationItems} from '@/components/ui/pagination';
import { Flex, Text, Heading, HStack, PaginationNextTrigger, PaginationPrevTrigger, PaginationRoot, Stack, Table } from '@chakra-ui/react';



function Forms(){
    return(
        <Flex
            height={"100vh"}
            width={"100vw"}
            bgColor={"#021823"}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}>
            
            <Flex
            height={"80vh"}
            width={"80vw"}
            bgColor={"#0B2436"}
            borderRadius={"10px"}
            >
              <Stack width={"100"} gap={"5"} paddingLeft={"65px"}>
                <Heading size={"3xl"} paddingTop={"45px"} >Lista de Formulários</Heading>
                <Table.Root size={"sm"} variant={"outline"} striped>
                    <Table.Header>
                    <Table.Row>
                        <Table.ColumnHeader width={"260px"} textAlign={"center"} textStyle={"md"}> 
                            Nome
                            </Table.ColumnHeader>
                        <Table.ColumnHeader width={"200px"} textAlign={"center"} textStyle={"md"}> 
                            Email Acadêmico
                            </Table.ColumnHeader>
                        <Table.ColumnHeader width={"80px"} textAlign={"center"} textStyle={"md"}> 
                            Curso
                            </Table.ColumnHeader>
                        <Table.ColumnHeader width={"80px"} textAlign={"center"} textStyle={"md"}> 
                            Semestre
                            </Table.ColumnHeader>
                        <Table.ColumnHeader width={"80px"} textAlign={"center"} textStyle={"md"}>
                            Matricula
                            </Table.ColumnHeader>
                        <Table.ColumnHeader width={"150 px"} textAlign={"center"} textStyle={"md"}>
                            Data de Inscrição
                            </Table.ColumnHeader>
                        <Table.ColumnHeader textAlign={"end"}></Table.ColumnHeader>
                    </Table.Row>
                    </Table.Header>
                    <Table.Body>
                    {items.map((item) => (
                        <Table.Row key={item.id}>
                        <Table.Cell  textAlign={"center"}>{item.name}</Table.Cell>
                        <Table.Cell  textAlign={"center"}>{item.email}</Table.Cell>
                        <Table.Cell  textAlign={"center"}>{item.curso}</Table.Cell>
                        <Table.Cell  textAlign={"center"}>{item.semestre}</Table.Cell>
                        <Table.Cell  textAlign={"center"}>{item.matricula}</Table.Cell>
                        <Table.Cell textAlign={"center"}>{item.data}</Table.Cell>
                        </Table.Row>
                    ))}
                    </Table.Body>
                </Table.Root>

              
                </Stack>
            </Flex>
            
        </Flex>
    )
}

// function ContextListGenerator(){
//     const section = [
//         {}
//     ]
    
// }


const items = [
    { id: 1, name: "Leonardo M", email: "leomullet@gmail.com", curso: "ES", semestre: 3, matricula: 22313133, data: "01/01/2021" },
    { id: 2, name: "Pedro K", email: "pedrokraque@gmail.com", curso:"CC", semestre: 2, matricula: 223156712, data: "01/01/2021" },
    { id: 3, name: "Thiago C", email: "tugado@gmail.com", curso:"ES", semestre: 3, matricula: 2323136789, data: "01/01/2021" },
    { id: 4, name: "Alice M", email: "alicemamadora@gmail.com", curso: "ES", semestre: 2, matricula: 202100003, data: "01/01/2021" },
    { id: 5, name: "Gabi R", email: "gabideiki@gmail.com", curso: "SI", semestre: 4, matricula: 202100004, data: "01/01/2021" },
  ]
  

export default Forms;