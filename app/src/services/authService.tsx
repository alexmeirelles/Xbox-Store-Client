import api from './Api';
import swal from 'sweetalert';

interface userLoginObj {
  nickname: string;
  password: string;
}

interface userObj {
  nickname: string;
  email: string;
  cpf: string;
  password: string;
  confirmPassword: string;
}

const loginService = {
  login: (values: userLoginObj) => 
    api.post('/auth/login', values)
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