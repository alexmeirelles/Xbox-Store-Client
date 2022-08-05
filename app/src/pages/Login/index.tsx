import { useState } from 'react';
import { loginService } from '../../services/authService';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import swall from 'sweetalert';
import logo from '../../assets/images/xbox.png'
import * as S from './style';

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
  }

  return (
    <S.LoginContainer>
      <S.LoginCard>
      <img src={logo} alt="logo xbox" width="120" height="120"/>
      <S.RegisterForm onSubmit={loginUser}>
          <S.InputCreate type="text" name="name" id="name" placeholder="user" onChange={handleChangesValues}/>
          <S.InputCreate type="password" name="password" id="password" placeholder="****" onChange={handleChangesValues}/>
          <S.ButtonCreate>
            login
          </S.ButtonCreate>
      </S.RegisterForm>
        <S.LinkRegister>
          <p><Link to="/register?" className='link-register'> or register </Link></p>
        </S.LinkRegister>
        </S.LoginCard>
      </S.LoginContainer>
  )
}

export default Login