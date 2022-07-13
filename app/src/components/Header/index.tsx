import logo from '../../assets/images/xbox.png'
import profile from '../../assets/images/profile.png'
import './style.css'
import { CgArrowLeftR } from 'react-icons/cg'

const Header = () => {
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
            23:58  
          </div>
        </div>
    </section>
    </header>
  )
}

export default Header