import { Box } from '@chakra-ui/react';
import { LanguageColorsDTO } from './ProjetoList';
import { useEffect, useState } from 'react';

interface CirculoProps{
  language: string;
  colorsDTO: LanguageColorsDTO | null
}


function Circulo({language, colorsDTO}:CirculoProps) {  
  const [languageColor,setLanguageColor] = useState("lightgray");

  const carregarDados = () => {
    

    if(!colorsDTO) return;

    //Aqui pegamos os dados que foram armazenados localmente na ProjetoList que são referentes ao LanguageColorsDTO
    const raw = localStorage.getItem(`language_colors_${colorsDTO.projectId}`);
    
    if(!raw) return;


    try {
      //Transformamos de JSON para LanguageColorsDTO
      const data: LanguageColorsDTO = JSON.parse(raw);

      if (data.languageColors && data.languageColors[language]) {
        //Configuramos o languageColor atual para o valor do Record 'languageColors' da chave 'language'
        setLanguageColor(data.languageColors[language]);
      }else{
        console.log("Cor não encontrada para linguagem", language)
      }
    } catch (error) {
      console.error("Erro ao fazer parse do localStorage", error)
    }
    
  }

  //A PARTIR DAQUI IREMOS IMPLEMENTAR A LÓGICA PARA GUARDAR A COR ATUAL LOCALMENTE E NÂO PERDE-LA AO MUDAR DE ABA

  const saveLanguageColor = () => {
    if(languageColor !== "lightgray"){
      localStorage.setItem(`languageColor${language}`, languageColor)
    }else{
      carregarDados();
    }
  }

  useEffect(()=>{
    saveLanguageColor();
    const color = localStorage.getItem(`languageColor${language}`);
    if(color != null){
      setLanguageColor(color);
    }

  },[languageColor,language]) 
  

  return (
    <Box
      height="8px"
      width="8px"          // altura
      backgroundColor={languageColor}   // cor de fundo
      borderRadius="full" // deixa completamente circular
      alignSelf="center"
      mr={1}
    />
  );
}

export default Circulo;