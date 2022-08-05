import Header from '../../components/Header/index';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./style.css";
import { CardsSection } from 'AppStyled';
import { Card } from '../../components/Card/card';
import swall from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import { findAll } from '../../services/gameService';
import ListGames from 'components/ListGames';



//interface User

function Home() {
return (
    <main>
      <Header/>
      <ListGames/>
      
    </main>
)
}
export default Home;