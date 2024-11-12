import { Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";


interface AddComponentProps {
    username : string
    projectName: string;  
  }

function AddComponent({ username,projectName }: AddComponentProps) {
    const [repoName, setRepoName] = useState("");
    const [repoDescription, setRepoDescription] = useState("");
    const [repoLanguages, setRepoLanguages] = useState<string[]>([]);

    const url = `https://api.github.com/repos/${username}/${projectName}`;
    useEffect(() => {
        const getReposData = async (url: string) => {
            try {   
                const response = await fetch(url);
                const json_data = await response.json();
                setRepoName(json_data.name);
                setRepoDescription(json_data.description);
                const languages = await getLanguageData(json_data.languages_url);
                setRepoLanguages(Object.keys(languages));
            } catch (error){
                console.error("Erro: " + error);
            }
                
            }
        const getLanguageData = async (languages_url: string) => {
            try {
                const response = await fetch(languages_url);
                const json_data = await response.json();
                return json_data;
            } catch (error) {
                console.error("Erro: " + error);
            }
        };
        getReposData(url);
    }, [url]);
    return (
        <Stack direction={"column"} gap={"4"}>
           <Stack direction={"row"} gap={"3"}>
                {repoName} {repoDescription} {repoLanguages}
            </Stack> 
        </Stack>
    );
}

export default AddComponent;
