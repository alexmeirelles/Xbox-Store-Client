import logo from '../../assets/images/xbox.png'
import profile from '../../assets/images/profile.png'
import './style.css'
import { CgArrowLeftR } from 'react-icons/cg'
import { DateTime } from "luxon";
import { useNavigate } from 'react-router-dom';




const Header = () => {
  
  const dateDescription = DateTime.now().toLocaleString({
    ...DateTime.TIME_24_SIMPLE,
  });

  
    let Navigate = useNavigate();
    function goToSettings() {
    Navigate("/settings/games");
  }
  return (
    <header>
    <section className='head'>
      <div className='boxleft'>
        <div>
          <h3>
            username
          </h3>
          <div>
          <CgArrowLeftR />
          </div>
        </div>
        <div className='fotouser'>
            <img src={profile} alt="profile" className='profilepic' />
        </div>
      </div>
        <div className='boxright'>      
          <div className='linksettings'>
            <p onClick={goToSettings}>settings</p>
          </div>
          <div>
            <img src={logo} alt="logo xbox" className='header-logo'/>
          </div>
          <div>
          {dateDescription}  
          </div>
        </div>
    </section>
    </header>
  )
}

export default Header