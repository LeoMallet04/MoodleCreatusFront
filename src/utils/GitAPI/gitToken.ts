import axios from "axios";

export interface GitToken {
    token: string; // O token de acesso
    expires_at: string; // Data de expiração do token (ISO 8601)
    permissions?: Record<string, string>; // Permissões concedidas ao token (opcional)
    repository_selection?: string;
}

//Pegamos o token do GitHub APP pelo endpoint do BackEnd
async function getGitToken(): Promise<GitToken | undefined>{
    try {
        const response = await axios.post('http://localhost:3000/git-token/access-app-token',
            {},
            {
                withCredentials: true
            }
        );

        console.log(response.data);

      
        const data = response.data;

        console.log(data.token);    


        const gitToken: GitToken = {
            token: data.token,
            expires_at: data.expires_at,
            permissions: data.permissions,
            repository_selection: data.repository_selection
        }

        return gitToken;

    } catch (error) {
        console.log("Erro ao fazer a requisição do token", error)
    }

}

export default getGitToken

