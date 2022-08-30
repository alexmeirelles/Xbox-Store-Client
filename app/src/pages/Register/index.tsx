import * as S from './style'
import logo from '../../assets/images/xbox.png'
import Button from "components/Button";
import { userService } from 'services/userService';
import { useNavigate } from 'react-router-dom';
import swall from 'sweetalert';

interface userObj {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  cpf: string;
}

const Register = () => {
  
  let navigate = useNavigate(); 

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>){ 
    event.preventDefault();

    const newUser: userObj = { 
    name: event.currentTarget.nome.value,
    email: event.currentTarget.email.value,
    password: event.currentTarget.password.value,
    confirmPassword: event.currentTarget.confirmPassword.value,
    cpf: event.currentTarget.cpf.value,
    };

    
    
    const req = await userService.postUser(newUser);
    if (req?.status === 201) { 
    navigate('/')
    }  swall({
      title: 'User created!',
      icon: 'success',
      timer: 3000,
    })
  }


  return (
    <S.RegisterContent>
        <S.Title> 
          create user
        </S.Title>
      <S.RegisterBox>
        <S.RegisterForm onSubmit={handleSubmit}>
          <S.InputCreate type="text" placeholder="Name" name='nome' id='name'/>
          <S.InputCreate type="text" placeholder="Email" name='email' id='email' />
          <S.InputCreate type="number" placeholder="CPF" name='cpf' id='cpf' />
          <S.InputCreate type="password" placeholder="Password" name='password'id='password' />
          <S.InputCreate type="password" placeholder="Confirm Password" name='confirmPassword' id='confirmPassword'/>
          <Button value={'Register'}> Register </Button>
        </S.RegisterForm>
      </S.RegisterBox>
      <S.XboxFooter>
        <img src={logo} alt="logo xbox" className='header-logo'/>
      <p>XBOX LITE</p>
    </S.XboxFooter>
    </S.RegisterContent>
  )
}

export default Register