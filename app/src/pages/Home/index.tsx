import Header from '../../components/Header/index';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./style.css";
import { CardsSection } from 'AppStyled';
import { Card } from '../../components/Card/card';


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
  const [games, setGames] = useState<GamesProps[]>([]);
  
  useEffect(() => {
    getAllGames();
  }, []);

  const getAllGames = async () => {
  const response = await axios.get('https://xbox-store-server-production.up.railway.app/jogos');
  setGames(response.data.results);

  }

return (
    <main>
      <Header/>
        <section className='list-cards'>
          <div className='card-container'>
            <CardsSection>
              {games.map((game: any, index) => (
              <Link to={`/login/${game.id}`} state={{id: game.id}} key={index}>
                <Card data={game} />
              </Link>
))}
            </CardsSection>
          </div>
        </section>
    </main>
)
}
export default Home;