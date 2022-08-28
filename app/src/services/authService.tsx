import api from './api';
import swal from 'sweetalert';

interface userLoginObj {
  name  : string;
  password: string;
}

interface userObj {
  name: string;
  cpf: string;
  password: string;
  confirmPassword: string;
}

const loginService = {
  login: (values: userLoginObj) => 
    api.post('/auth', values)
    .then((response: any) => response)
    .catch((error: any) => console.log('ERRO NA CHAMADA:', error))
}


const registerService = {
  registerValues: (values: userObj) => 
    api.post('/user/create', values)
    .then((response: any) => response)
    .catch((error: any) => error.response)
}

const userLoggedService = {
  userLogged: () =>
    api.get('/user/findById')
    .then((response:any) => response)
    .then((response: any) => response)
    .catch((error: any) => {
      swal({
        title: 'Erro!',
        text: `${error.message}`,
        icon: 'error',
        timer: 7000
      })
    })
}

export { loginService, registerService, userLoggedService };