import { ErrorMessage, StyledInput } from "assets/styles/globalStyles";
import { ModalOverlay } from "assets/styles/globalStyles";
import Button from "components/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as S from "./style";
import * as yup from "yup";
import { useState } from "react";
import api from "services/api";
import toast from "react-hot-toast";
import { useGames } from "contexts/games";
import { Game, Genre } from "utils/types/index";
import { useGenres } from "contexts/genres";


/* HOOKFORM */
interface GameModalProps { 
  handleOpenModal: () => void;
  game?: Game;
  genre?: Genre;
  setGame: React.Dispatch<React.SetStateAction<Game | undefined>>;
}

interface GameData {
  title?: string;
  description?: string;
  genreId?: string;
  year?: number;
  coverImageUrl?: string;
  trailerYoutubeUrl?: string;
  gameplayYoutubeUrl?: string;
  score?: number;
}

const newGameSchema = yup.object().shape({
  title: yup.string().required("Title is required"),

  description: yup.string().required("Game description is required"),

  year: yup.number().required("Release year is required"),

  coverImageUrl: yup.string().url("Invalid URL format").required("Game cover image is required"),

  trailerYoutubeUrl: yup.string().url("Invalid URL format").required("Embed URL required"),

  gameplayYoutubeUrl: yup.string().url("Invalid URL format").required("Embed URL required"),

  score: yup.number().required("IMDb Score is required"),
});

const updateGameSchema = yup.object().shape({
  title: yup.string(),

  description: yup.string(),

  year: yup.number(),

  coverImageUrl: yup.string(),

  trailerYoutubeUrl: yup.string(),

  gameplayYoutubeUrl: yup.string(),

  score: yup.number(),
});

const GameModal = ({handleOpenModal, game, setGame}: GameModalProps  ) => { 
  const { handleGetGames } = useGames();
  const {  genres , handleGetGenres } = useGenres();
  const [genreName, setGenreNameId] = useState<string>(
    game ? game.genreId: ""
    );

  /* useForm */
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<GameData>({ resolver: yupResolver(game? updateGameSchema: newGameSchema) });

  const token = localStorage.getItem("token");

    const headers = { 
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

  const handleNewGame = (data: GameData) => {
    data.genreId = genreName;
    api
    .post(`/game`, data, headers)
    .then(() => {
      toast.success("Game added succesfully!");
      handleGetGames();
      handleOpenModal();
      setGame(undefined);
    })
    .catch(() => toast.error("Select a genre!"));
  }; 

  const handleUpdateGame = (data: GameData) => {
    data.genreId = genreName;
    api.
    patch(`/game/${game?.id}`, data, headers)
    .then(() => {
      toast.success("Game updated succesfully!");
      handleGetGames();
      handleOpenModal();
      setGame(undefined);
    });
  };

  return (
    <ModalOverlay>
      <S.ModalContainer 
      onSubmit={
          game
        ? handleSubmit(handleUpdateGame)
        : handleSubmit(handleNewGame)
      } 
      >
        <h2>{game
         ? "Update Game"
          : "Register a new game"
          }
        </h2>
        
        <StyledInput 
        defaultValue={game ? game.title : ""}
        placeholder="Title" 
        {...register("title")}/>

        <StyledInput
        defaultValue={game ? game.description : ""}
        placeholder="Description" 
        {...register("description")}/>

        <S.Select 
        value={genreName} 
        onChange={(e) => 
        setGenreNameId(e.target.value)}>
          <option>Select a genre </option>
          {genres.map((element) => (
          <option value={element.genre}>{element.genre}
          </option> 
           ))}
        </S.Select>

        <StyledInput 
        defaultValue={game ? game.year : ""}
        placeholder="Year" 
        {...register("year")}
        />
        <StyledInput 
        defaultValue={game ? game.trailerYoutubeUrl : ""}
        placeholder="Trailer URL" 
        {...register("trailerYoutubeUrl")}
        />
        <StyledInput 
        defaultValue={game ? game.gameplayYouTubeUrl : ""}
        placeholder="Gameplay URL" 
        {...register("gameplayYoutubeUrl")}
        />
        <S.Select
         defaultValue={game ? game.imdbScore : ""}
         placeholder="IMDb Score" 
         {...register("score")}>
        <option>IMDb Score</option>
        <option>5</option>
        <option>4</option>
        <option>3</option>
        <option>2</option>
        <option>1</option>

        </S.Select>
        <StyledInput 
        defaultValue={game ? game.coverImageUrl : ""}
        placeholder="Image URL" 
        {...register("coverImageUrl")}
        />

        <ErrorMessage>
            {errors.title?.message ||
              errors.description?.message ||
              errors.year?.message ||
              errors.trailerYoutubeUrl?.message ||
              errors.gameplayYoutubeUrl?.message ||
              errors.score?.message ||
              errors.coverImageUrl?.message}
          </ErrorMessage>
        <div>
          <Button value={"Send"} type="submit"/>
          <Button value={"Cancel"} variant="cancel" onClick={()=> {
            handleOpenModal();
            setGame(undefined);
          }
          } />
        </div>
      </S.ModalContainer>
    </ModalOverlay>
  );
};

export default GameModal;
