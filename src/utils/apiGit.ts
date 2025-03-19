const BASE_URL = "https://api.github.com/repos";

interface GitDTO {
  repo_name: string;
  repo_description: string;
  repo_languages: string[];
}

async function getReposData(user_name: string, repo_name: string): Promise<GitDTO | null> {
  const url = `${BASE_URL}/${user_name}/${repo_name}`;
  console.log("URL da API do GitHub:", url);
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.statusText}`);
    }

    const json_data = await response.json();

    const repo_name = json_data.name ?? "";
    const repo_description = json_data.description ?? "";
    const repo_languages = await getLanguageData(json_data.languages_url);

    console.log(`Nome do repositório: ${repo_name}`);
    console.log(`Descrição: ${repo_description}`);
    console.log(`Linguagens: ${repo_languages.join(", ")}`);

    return {
      repo_name,
      repo_description,
      repo_languages
    };
  } catch (error) {
    console.error("Erro ao buscar os dados do repositório:", error);
    return null;
  }
}

async function getLanguageData(languages_url: string): Promise<string[]> {
  try {
    const response = await fetch(languages_url);
    
    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.statusText}`);
    }

    const json_data = await response.json();
    return Object.keys(json_data);
  } catch (error) {
    console.error("Erro ao buscar linguagens:", error);
    return [];
  }
}

export {getLanguageData, getReposData}