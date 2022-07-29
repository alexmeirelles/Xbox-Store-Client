import * as S from './style'
import logo from '../../assets/images/xbox.png'

const index = () => {
  
  return (
    <S.RegisterContent>
        <S.Title> 
          criar user
        </S.Title>
      <S.RegisterBox>
        <S.RegisterForm>
          <S.InputCreate type="text" placeholder="Nome" />
          <S.InputCreate type="text" placeholder="Email" />
          <S.InputCreate type="number" placeholder="CPF" />
          <S.InputCreate type="password" placeholder="Senha" />
          <S.InputCreate type="password" placeholder="Confirmar Senha" />
          <S.ButtonCreate>
            Criar
          </S.ButtonCreate>
        </S.RegisterForm>
      </S.RegisterBox>
      <S.XboxFooter>
        <img src={logo} alt="logo xbox" className='header-logo'/>
      <p>XBOX LITE</p>
    </S.XboxFooter>
    </S.RegisterContent>
  )
}

export default index