import { games } from 'mocks/games';
import './App.css';
import { CardsSection } from 'AppStyled';
import { Card } from '../../components/card';

function Home() {
return (
    <CardsSection>
      {games?.map((game) => {
        return <Card game={game} key={game.id} />;
      })}
    </CardsSection>
);
}

export default Home;