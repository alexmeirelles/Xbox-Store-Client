import * as S from './style'
import { Game } from '../../utils/types/index';
import Card from '../../components/Card/card';

interface GamesListProps {
    game: Game[];
    isFavoritesList: boolean;
    handleGetFavorites: () => void;
  }

const GamesList = ({ 
  game,
  isFavoritesList,
  handleGetFavorites,
}: GamesListProps) => {
  return (
    <div className='card-container'>
        {game.map((element) => (
            <Card
            game={element} 
            key={element.id} 
            isFavoritesList={isFavoritesList}
            handleGetFavorites={handleGetFavorites}            
            />
        ))}
    </div>
  )
}

export default GamesList;



