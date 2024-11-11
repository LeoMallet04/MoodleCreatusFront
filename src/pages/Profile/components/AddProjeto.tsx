import {Flex,Button,Input} from "@chakra-ui/react";

function AddProjeto() {
    return <Flex>
        <Input placeholder="Nome do projeto" />
        <Input placeholder="Descrição do projeto" />
        <Input placeholder="Tecnologias usadas" />
        <Button>Adicionar Projeto</Button>
    </Flex>
}

export default AddProjeto;