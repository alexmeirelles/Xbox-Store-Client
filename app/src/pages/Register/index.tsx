import * as S from './style'
import logo from '../../assets/images/xbox.png'

const index = () => {
  
  return (
    <S.RegisterContent>
        <S.Title> 
          create user
        </S.Title>
      <S.RegisterBox>
        <S.RegisterForm>
          <S.InputCreate type="text" placeholder="Name" />
          <S.InputCreate type="text" placeholder="Email" />
          <S.InputCreate type="number" placeholder="CPF" />
          <S.InputCreate type="password" placeholder="Password" />
          <S.InputCreate type="password" placeholder="Confirm Password" />
          <S.ButtonCreate>
            Create
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