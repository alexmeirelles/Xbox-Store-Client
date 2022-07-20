import api from "./Api";

export const findAll = {
    allGames : () => api.get("/jogos")
    .then ((response: any) => {
        return response;
    }).catch(
        (error: any) => {
            console.log(error);
        }
    )
}
