import logo from '../../assets/images/xbox.png'
import './style.css'

const Header = () => {
  return (
    <section className='head'>
      <div className='left'>
        <div>profile</div>
      </div>
        <div className='right'>      
          <div>
            <img src={logo} alt="logo xbox" className='header-logo'/>
          </div>
          <div>
          data   
          </div>
        </div>
    </section>
  )
}

export default Header