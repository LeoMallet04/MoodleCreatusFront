import { Box } from '@chakra-ui/react';
import { LanguageColorsDTO } from './ProjetoList';

interface CirculoProps{
  language: string;
  colorsDTO: LanguageColorsDTO | null
}


function Circulo({language, colorsDTO}:CirculoProps) {  
  var languageColor = "lightgray";
  if(colorsDTO){
    const raw = localStorage.getItem(`language_colors_${colorsDTO.projectId}`);
    if(raw){
      try {
        const data: LanguageColorsDTO = JSON.parse(raw);

        if (data.languageColors && data.languageColors[language]) {
          languageColor = data.languageColors[language];
        }
      } catch (error) {
        console.error("Erro ao fazer parse do localStorage", error)
      }
    }
  }


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