import * as S from "./style";
import back from "assets/icons/back.svg";
import { useNavigate } from "react-router-dom";
import SettingsGameCard from "components/GamesCRUD/SettingsGameCard";
import { useState } from "react";
import GameModal from "components/GamesCRUD/GameModal";
import { useGames } from "contexts/games";
import { Game } from "utils/types/index";
import DeleteGameModal from "components/GamesCRUD/DeleteGameModal";
import MenuSettings from "components/SettingsMenu";

const GameSettings = () => {
  let Navigate = useNavigate();
  function goToHome() {
    Navigate("/home");
  }

  const { games } = useGames();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
  const [game, setGame] = useState<Game | undefined>(undefined);
  
  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  const handleOpenDeleteModal = () => {
    setOpenDeleteModal(!openDeleteModal);
  };


  return (
    <S.SettingsContainer>
      <S.BackButton>
        <img src={back} alt="backButton" onClick={goToHome} />
      </S.BackButton>

      <MenuSettings path={"games"} />

      <S.EditEntitiesContainer>
        <h2>Manage Games</h2>
        <S.EntitiesEditList>
          <S.AddEntitieCard onClick={handleOpenModal}>
            <h2>+</h2>
            <p>Add Game</p>
          </S.AddEntitieCard>

          {games.map((element) => (
            <SettingsGameCard
              setGame={setGame}
              handleOpenModal={handleOpenModal}
              handleOpenDeleteModal={handleOpenDeleteModal}
              game={element}
              key={element.id}
            />
          ))}
        </S.EntitiesEditList>
      </S.EditEntitiesContainer>

      {openModal && (
        <GameModal
          setGame={setGame}
          game={game}
          handleOpenModal={handleOpenModal}
        />
      )}

      {openDeleteModal && (
        <DeleteGameModal
          setGame={setGame}
          gameId={game?.id}
          handleOpenDeleteModal={handleOpenDeleteModal}
        />
      )}
    </S.SettingsContainer>
  );
};

export default GameSettings;
