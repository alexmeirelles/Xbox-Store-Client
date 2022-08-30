import back from "assets/icons/back.svg";
import DeleteGenreModal from "components/GenresCRUD/DeleteGenreModal";
import GenreModal from "components/GenresCRUD/GenreModal";
import MenuSettings from "components/SettingsMenu";
import { useGenres } from "contexts/genres";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Genre } from "utils/types/index";
import * as S from "./style";

const GenreSettings = () => {
  let Navigate = useNavigate();
  function goToHome() {
    Navigate("/home");
  }
  
  const { genres } = useGenres();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
  const [genre, setGenre] = useState<Genre | undefined>(undefined);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  
  const handleOpenUpdateModal = (genre: Genre) => {
    setGenre(genre);
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
      <MenuSettings path={"genres"} />
     

      <S.EditEntitiesContainer>
        <h2>Manage Genres</h2>
        <S.EntitiesEditList>
          <S.AddEntityCard onClick={handleOpenModal}>
            <h2>+</h2>
            <p>Add Genre</p>
          </S.AddEntityCard>

          {genres.map((element) => (
          <S.SettingsGenreCard key={element.id}>
            <h2>{element.genre}</h2>

            <div>
            <S.SettingsGenreEditCardButton
                onClick={() => {
                  setGenre(genre);
                  handleOpenUpdateModal(element);
                }}
              >
                Edit
              </S.SettingsGenreEditCardButton>
              <S.SettingsGenreDeleteCardButton
                onClick={() => {
                  setGenre(element);
                  handleOpenDeleteModal();
                }}
              >
                Delete
              </S.SettingsGenreDeleteCardButton>
            </div>
              
            
          </S.SettingsGenreCard>
        ))}

        </S.EntitiesEditList>
      </S.EditEntitiesContainer>
 
       {openModal && (
        <GenreModal
          setGenre={setGenre}
          genre={genre}
          handleOpenModal={handleOpenModal}
        />
      ) }

      {openDeleteModal && (
        <DeleteGenreModal
          setGenre={setGenre}
          genreId={genre?.id}
          handleOpenDeleteModal={handleOpenDeleteModal}
        />
      )} 
    </S.SettingsContainer>
  );
};

export default GenreSettings;
