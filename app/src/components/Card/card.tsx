import { Game } from "utils/types/game.type";
import { CardStyle } from "./card.style";

interface CardProps { 
  game: {
  id: string;
  title: string;
  coverImageUrl: string;
  description: string;
  year: number;
  imdbScore: number;
  trailerYoutubeUrl: string;
  gameplayYouTubeUrl: string;
  }
}

export function Card({game}: CardProps ) {
  return (
    <CardStyle>
      <img src={game.coverImageUrl} className="" alt="" />
      <h2>{game.title}</h2>
      <span>genero</span>
    </CardStyle>
  );
}


