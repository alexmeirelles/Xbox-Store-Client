import { useState } from 'react';
import { loginService } from '../../services/authService';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import swall from 'sweetalert';

interface userLoginObj {
  name: string;
  password: string;
}

const Login = (props: any) => {
  const [values, setValues] = useState({
    name: '',
    password: '',
  })

  let navigate = useNavigate();

  const handleChangesValues = (event: React.ChangeEvent<HTMLInputElement>)  => {
    setValues((values: userLoginObj) => ({
      ...values,
      [event.target.name]: event.target.value
    }))
  }
  


  const loginUser = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const response = await loginService.login(values)
    const jwt = response.data.token;

    if(jwt) {
      localStorage.setItem('jwtLocalStorage', jwt);
      swall({
        title: 'Seja bem vindo',
        icon: 'success',
        timer: 3000,
      })
      navigate('/');
    }
    console.log(response.data);
    console.log("amigo estou aqui",values);
  }

  return (
    <section className="login-container">
      <div className="login-card">
        <h2>Entrar</h2>
        <form onSubmit={loginUser} className="form-login">
          <input type="text" name="name" id="name" placeholder="Digite o Usuario" onChange={handleChangesValues}/>
          <input type="password" name="password" id="password" placeholder="Digite a sua senha" onChange={handleChangesValues}/>
          <button>Entrar</button>
        </form>
        <p>Não tem conta ? <Link to="/register" className='link-register'>Cadastre-se</Link></p>
      </div>
    </section>
  )
}

export default Login