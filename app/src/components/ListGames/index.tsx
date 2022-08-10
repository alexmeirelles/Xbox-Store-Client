import { Link } from 'react-router-dom';
import * as S from "./style";
import { CardsSection } from 'AppStyled';
import { Card } from '../../components/Card/card';
import swall from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import { findAll } from '../../services/gameService';
import { mockedCategories, mockedGames } from "../../mocks";
import { useEffect, SetStateAction, useState } from "react";
import { Category, Game } from '../../utils/types/index';


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

interface ProductsListProps {
  list: Game[];
}

function ListGames() {
  const [selectedCategory, setSelectedCategory] = useState<Category>(
    mockedCategories[0]
  );

  const filteredGames: Game[] = mockedGames.filter(
    (element) => element.genreId === selectedCategory.id
  );
  
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
      <div className='divider'> {/*container*/}
        <div className='line-left'><hr color="lightgray"/></div>
          <div><p>FAV</p></div>
        <div className='line-right'><hr color="lightgray"/></div>
      </div>
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
        <div className='divider'> {/*container*/}
      <div className='line-left'><hr color="lightgray"/></div>
      <div><p>ALL</p></div>
      <div className='line-right'><hr color="lightgray"/></div>
      </div>
      <section className='list-cards'>
          <div className='card-container'>
            <CardsSection>
            
            {mockedCategories.map((element) => {
              return (
                <S.CategoriesNavigationButton
                  active={element.name === selectedCategory.name}
                  onClick={() => setSelectedCategory(element)}
                >
                  {element.name}
                </S.CategoriesNavigationButton>
              );
            })}
          <ListGames list={filteredGames} />
            </CardsSection>
            </div>
        </section>
    </main>
)
}
export default ListGames;