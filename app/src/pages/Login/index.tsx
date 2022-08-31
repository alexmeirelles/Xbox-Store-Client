import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/xbox.png'
import * as S from './style';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAuth } from "contexts/auth";
import { useForm } from "react-hook-form";
import api from "services/api";
import { ErrorMessage } from "assets/styles/globalStyles";
import toast from "react-hot-toast";


interface LoginData {
  name: string;
  password: string;
}

const loginSchema = yup.object().shape({
  name: yup
    .string()
    .required("Campo name obrigatório"),

  password: yup
    .string()
    .min(8, "Sua senha deve ter no mínimo 8 caracteres")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
      "Sua senha deve ter no mímino 1 caracter especial, um número e uma letra maiúscula"
    )
    .required("Campo de senha obrigatório"),
});

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({ resolver: yupResolver(loginSchema) });

  const handleLogin = (data: LoginData) => {
    api
      .post(`/auth`, data)
      .then((res) => {
        login({ token: res.data.token, user: res.data.user })
        navigate('/profiles');
      })
      .catch(() => {
        toast.error("Usuário ou senha inválido");
      });
  };

  return (
    <S.LoginContainer>
      <S.LoginCard>
      <img src={logo} alt="logo xbox" width="120" height="120"/>
      <S.RegisterForm onSubmit={handleSubmit(handleLogin)}>
      <input
                type="text"
                placeholder="mail"
                
                id="name"
                {...register("name")}
              />
              <input
                type="password"
                placeholder="****"
            
                id="password"
                {...register("password")}
              />
          <S.ButtonCreate>
            login
          </S.ButtonCreate>
      </S.RegisterForm>
        <S.LinkRegister>
          <p><Link to="/register?" className='link-register'> or register </Link></p>
        </S.LinkRegister>
        </S.LoginCard>
        <ErrorMessage>
      {errors.password?.message}
    </ErrorMessage>
      </S.LoginContainer>
  )
}

export default Login