import { Game } from "utils/types/game.type";
import { CardStyle } from "./card.style";

export function Card(data: { game: Game }) {
  return (
    <CardStyle>
      <img src={data.coverImageUrl} className="" alt="" />
      <h2>{data.title}</h2>
      <span>{data.genre}</span>
    </CardStyle>
  );
}


