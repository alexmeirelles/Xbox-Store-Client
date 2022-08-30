import axios from 'axios';
import api from "./api";
import swal from 'sweetalert';
axios.defaults.baseURL = 'https://xboxlite.onrender.com"';
axios.defaults.headers.post["Content-Type"] = "application/json";

interface userObj {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    cpf: string;
    image: string;
}

const userService = {
    postUser: async (newUser: userObj) => {
    try{
        const req = await axios.post('/user', newUser)
        return req;
    }catch (err){
        alert(err)    
    }
    }
}


const findUserByIdService = {
    findUserById: (id: string) =>
      api.get(`/user/${id}`)
      .then((response: any) => response)
      .catch((error: any) => {
        swal({
          title: "Error!",
          text: `${error.message}`,
          icon: "error",
          timer: 7000,
        })
        console.log(error);
      }) 
}

  const updateUserService = {
    updateGame: (game: object, id: string) =>
    api.patch(`/user/${id}`, game)
      .then((response: any) => response)
      .catch((error: any) => {
        swal({
          title: "Error!",
          text: `${error.message}`,
          icon: "error",
          timer: 7000,
        })
      })
  }
  
  const deleteUserService = {
    deleteGame: (id: string) =>
    api.delete(`/user/${id}`)
      .then((response: any) => response)
      .catch((error: any) => {
        swal({
          title: "Error!",
          text: `${error.message}`,
          icon: "error",
          timer: 7000,
        })
      })
  }
export { userService, findUserByIdService, deleteUserService, updateUserService };