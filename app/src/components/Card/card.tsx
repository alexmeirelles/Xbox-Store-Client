import { Game } from "utils/types/game.type";
import { CardStyle } from "./card.style";

export function Card(props: { game: Game }) {
  return (
    <CardStyle>
      <h2>{props.game.name}</h2>
      <span>{props.game.genre}</span>
    </CardStyle>
  );
}
