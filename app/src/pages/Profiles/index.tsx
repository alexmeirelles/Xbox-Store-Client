import React, { useState, useEffect } from 'react'
import * as S from './style'
import { BiEdit } from 'react-icons/bi'
import { Profile } from '../../utils/types/profiletypes'
import { User } from '../../utils/types/usertypes'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/images/xbox.png'

const Profiles = () => {
  const navigate = useNavigate();

  const [ profile, setProfile ] = useState<Profile[]>([]);
  const [ userLogged, setUserLogged ] = useState<User[]>([]);

  const editIcon = <BiEdit size={20} />
  return (
    <S.ProfileMain>
      <S.ProfileSection>
        <div>
          <img src="https://avatars.githubusercontent.com/u/96752298?v=4" alt="" />
          <p>Profile 1</p>
          <button>{editIcon}</button>
        </div>
        <div>
          <img src="https://avatars.githubusercontent.com/u/83729692?v=4" alt="" />
          <p>Profile 2</p>
          <button>{editIcon}</button>
        </div>
        <div>
          <img src="https://avatars.githubusercontent.com/u/97460632?v=4" alt="" />
          <p>Profile 3</p>
          <button>{editIcon}</button>
        </div>
        <div>
          <img src="https://avatars.githubusercontent.com/u/83729692?v=4" alt="" />
          <p>Profile 4</p>
          <button>{editIcon}</button>
        </div>
      </S.ProfileSection>
      <S.XboxFooter>
      <div>
        <img src={logo} alt="logo xbox" className='header-logo'/>
      </div>
    </S.XboxFooter>
    </S.ProfileMain>


  )
}

export default Profiles