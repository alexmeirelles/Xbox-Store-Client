import { useNavigate } from 'react-router-dom';
import * as S from "./style";
import back from "assets/icons/back.svg";
import { Game } from "utils/types/index";


interface GamePageProps {
  game?: Game;
  handleGamePage: () => void;
}

const GameDetails = () => {
    let Navigate = useNavigate();
    function goToHome() {
      Navigate("/home");
}

  return (
    <S.GameDetails>
        <S.BackButton >
        <img src={back} onClick={goToHome} />
        </S.BackButton>
        <h1>Forza 7</h1>
        <S.GameDetailsBox1>
        <img src='https://images-americanas.b2w.io/produtos/01/00/item/132532/8/132532885_1GG.jpg' />
        <iframe src="https://www.youtube.com/embed/9aAr5blVy0g" /* COLOCAR PARA LER A URL */></iframe>
        <iframe src="https://www.youtube.com/embed/_HgzWXWaQns"></iframe>
        </S.GameDetailsBox1>
       
        <S.GameDetailsBox2>
        <h2>Forza Motorsport 7 is a 2017 racing video game developed by Turn 10 Studios and published by Microsoft Studios, serving as the tenth installment in the Forza series. It was released on Windows 10 and the Xbox One family of consoles on October 3, 2017, with early access to players who pre-ordered the game's Ultimate and Deluxe editions.</h2>
        <h2>IMDb Score:</h2>
        <h3>4</h3>
        </S.GameDetailsBox2>
       
        
    </S.GameDetails>
  )
}

export default GameDetails;