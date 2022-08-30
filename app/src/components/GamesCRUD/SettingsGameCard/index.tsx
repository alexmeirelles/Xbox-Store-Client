import { Game } from "utils/types/index";
import * as S from "./style";

interface SettingsGameCardProps {
  game: Game;
  handleOpenModal: () => void;
  handleOpenDeleteModal: () => void;
  setGame: React.Dispatch<React.SetStateAction<Game | undefined>>;
}

const SettingsGameCard = ({ game, handleOpenModal, handleOpenDeleteModal, setGame }: SettingsGameCardProps) => {
  return (
    <S.SettingsGameCardContainer>
      <img src={game.coverImageUrl} alt={game.title} />
      <h3>{game.title}</h3>
      <div>
      <S.SettingsGameEditCardButton 
      onClick={() => {
        setGame(game);
        handleOpenModal();
      }}>
        Edit
      </S.SettingsGameEditCardButton>
      <S.SettingsGameDeleteCardButton
      onClick={() => {
        setGame(game);
        handleOpenDeleteModal();
      }}
      >
        Delete
      </S.SettingsGameDeleteCardButton>
      </div>
      
    </S.SettingsGameCardContainer>
  );
};

export default SettingsGameCard;
