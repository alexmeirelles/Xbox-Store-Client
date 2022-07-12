import { games } from 'mocks/games';

import Header from '../../components/Header/index';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./style.css";
import { CardsSection } from 'AppStyled';
import { Card } from '../../components/Card/card';



function Home() {
return (
  <>
  <nav>
    <Header />
  </nav>
    <main>
    <CardsSection>
      {games?.map((game) => {
        return <Card game={game} key={game.id} />;
      })}
    </CardsSection>
    </main>
  </>
);
}

export default Home;

// return (
//     <main>
//       <Header/>
//       <section className='list-cards'>
//         <div className='card-container'>
//           {characters.map((character: any, index) => (
//             <Link to={`/login/${character.id}`} state={{id: character.id}} key={index}>
//               <Card data={character} />
//             </Link>
//           ))}
//         </div>
//         <button className='btn-view-more'>Ver mais</button>
//         <button onClick={callNextPage}>next page</button>
//         <button onClick={callPreviousPage}>previous page</button>
//       </section>
//     </main>
//   )
// }
