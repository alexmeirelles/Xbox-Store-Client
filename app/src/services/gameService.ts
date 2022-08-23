import api from "./Api";
import swal from "sweetalert";

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

const createService = {
    createGame: (values: object) =>
    api.post('/game/create', values)
      .then((response: any) => response)
      .catch((error: any) => {
        swal({
          title: "Erro!",
          text: `${error.message}`,
          icon: "error",
          timer: 7000,
        })
      })
  }
  
  const findByIdService = {
    findGameById: (id: string) =>
      api.get(`/game/byIdPost/${id}`)
      .then((response: any) => response)
      .catch((error: any) => {
        swal({
          title: "Erro!",
          text: `${error.message}`,
          icon: "error",
          timer: 7000,
        })
      })
  }
  
  const updateService = {
    updateGame: (game: object, id: string) =>
    api.patch(`/game/update/${id}`, game)
      .then((response: any) => response)
      .catch((error: any) => {
        swal({
          title: "Erro!",
          text: `${error.message}`,
          icon: "error",
          timer: 7000,
        })
      })
  }
  
  const deleteService = {
    deleteGame: (id: string) =>
    api.delete(`/game/delete/${id}`)
      .then((response: any) => response)
      .catch((error: any) => {
        swal({
          title: "Erro!",
          text: `${error.message}`,
          icon: "error",
          timer: 7000,
        })
      })
  }
  
  export { createService, findByIdService, updateService, deleteService }