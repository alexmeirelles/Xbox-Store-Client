import logo from '../../assets/images/xbox.png'
import profile from '../../assets/images/profile.png'
import './style.css'
import { CgArrowLeftR } from 'react-icons/cg'
import { DateTime } from "luxon";




const Header = () => {
  
  const dateDescription = DateTime.now().toLocaleString({
    ...DateTime.TIME_24_SIMPLE,
  });

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
          <div>
            create  
          </div>
          <div>
            edit          
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