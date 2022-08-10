import Header from '../../components/Header/index';
import "./style.ts";
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