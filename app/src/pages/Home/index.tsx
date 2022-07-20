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


interface GamesProps {
  id: number;
  title: string;
  coverImageUrl: string;
  description: string;
  year: number;
  imdbScore: number;
  trailerYoutubeUrl: string;
  gameplayYouTubeUrl: string;
}

//interface User

function Home() {
  const navigate = useNavigate();
  const [games, setGames] = useState<GamesProps[]>([]);
  
  useEffect(() => {
    getAll();
  }, []);

const jwt = localStorage.getItem('jwtLocalStorage');

const getAll = async () => {
  if (!jwt) {
    swall({
      title: "ERRO",
      text: "Faça o Login antes de entrar na página de games",
      icon: "error",
      timer: 7000,
    });
    navigate("/");
  } else {
    const response = await findAll.allGames();
    if(response.status === 204){
      swall({
          title: 'Info',
          text: 'Não existe jogo cadastrado!',
          icon: 'info',
          timer: 7000,
      })
    }else{
      console.log(response.data)
      setGames(response.data);
    }
  }
};
return (
    <main>
      <Header/>
        <section className='list-cards'>
          <div className='card-container'>
            <CardsSection>
              {games?.map((game: any, index) => (
              <Link to={`/login/${game.id}`} state={{id: game.id}} key={index}>
                <Card game={game} />
              </Link>
))}
            </CardsSection>
          </div>
        </section>
    </main>
)
}
export default Home;