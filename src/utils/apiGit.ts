import axios from "axios";
import getGitToken, { GitToken } from "./gitToken";

const BASE_URL = "https://api.github.com/repos";
const URL_COLORS = "https://raw.githubusercontent.com/ozh/github-colors/master/colors.json";

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
    const gitToken: GitToken | undefined = await getGitToken();

    if(!gitToken || gitToken == undefined){
      throw new Error("Token inválido");
    }

    console.log(gitToken.token);

    const response = await axios.get(url, {
      headers: {
        Authorization: `token ${gitToken.token}`,
        Accept: `application/vnd.github+json`,
        'X-GitHub-Api-Version': '2022-11-28',
      }
    });
    
    console.log("Authorization Header:", response.headers['authorization'])

    const json_data = await response.data;

    const repo_name = json_data.name ?? "";
    const repo_description = json_data.description ?? "";
    //Aqui chamamos a função getLanguagesData() passando a URL das linguagens que contêm na response
    const repo_languages = await getLanguageData(json_data.languages_url);
    const repo_url = json_data.html_url ?? "";


    return {
      repo_name,
      repo_description,
      repo_languages,
      repo_url
    };
  } catch (error) {
    console.error("Erro ao buscar os dados do repositório:", error);
    return null;
  }
}

//Aqui pegamos as linguagens usadas em um repositório com base na URL das linguagens cujo está dentro
//da response dos dados obtidos pela API do GitHub
async function getLanguageData(languages_url: string): Promise<string[]> {
  try {
    const response_languages = await axios.get(languages_url);

    const json_data = await response_languages.data;
    return Object.keys(json_data);
  } catch (error) {
    console.error("Erro ao buscar linguagens: ", error);
    return [];
  }
}

export {getLanguageData, getReposData}