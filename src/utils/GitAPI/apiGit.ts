import axios from "axios";

const BASE_URL = "https://api.github.com/repos";

interface GitDTO {
  repo_name: string;
  repo_description: string;
  repo_languages: string[];
  repo_url: string;
}


//Nessa função pegamos os dados do repositório pela API do GitHub com base no username do GitHub
//e o nome do repositório desejado
async function getReposData(user_name: string, repo_name: string): Promise<GitDTO | null> {
  const url = `${BASE_URL}/${user_name}/${repo_name}`;
  console.log("URL da API do GitHub:", url);

  try {
    
    const response = await axios.post("http://localhost:3000/git-api/repos-auth", {
    url
    },{
      withCredentials: true
    });

    const data = response.data;

    const gitDto: GitDTO = {
      repo_name: data.repo_name,
      repo_description: data.repo_description,
      repo_languages: data.repo_languages,
      repo_url: data.repo_url,
    };


    return gitDto;
  
  } catch (error) {
    console.error("Erro ao buscar os dados do repositório:", error);
    return null;
  }
}


async function getLanguagesColor(languages: string[]): Promise<Record<string, string> | null> {
  const languages_colors: Record<string, string> = {};

  const response_colors = await fetch('src/utils/colors.json');
  
  if (!response_colors.ok) {
    return null;
  }

  const colorsData = await response_colors.json();

  languages.forEach((language) => {
    languages_colors[language] = colorsData[language]?.color || "unknown";
  });

  console.log(languages_colors);
  return languages_colors;


}

export {getReposData, getLanguagesColor}