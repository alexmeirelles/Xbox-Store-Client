import * as S from './style'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/images/xbox.png'
import { useProfiles } from "contexts/profiles";

const Profiles = () => {

  
  const { profiles } = useProfiles();
  let Navigate = useNavigate();
  function goToAdminHome() {
  Navigate("/");
  }
  
  return (
    <S.ProfileMain>
    <S.Title> 
          create profile
        </S.Title>
      <S.ProfileSection>
      {profiles.map((element) => (
        <div>
        <img src={element.imageURL} alt='user' onClick={goToAdminHome}/>
        <h2>{element.name}</h2> 
        </div>
        ))}
        
      </S.ProfileSection>
      <S.XboxFooter>
        <img src={logo} alt="logo xbox" className='header-logo'/>
      <p>XBOX LITE</p>
    </S.XboxFooter>
    </S.ProfileMain>

  )
}

export default Profiles