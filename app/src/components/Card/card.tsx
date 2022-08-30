import { Game, Profile, Favorite } from "utils/types/index";
import toast from "react-hot-toast";
import api from "services/api";
import * as S from "./style";
import Button from "components/Button";

interface CardProps {
  game: Game;
  isFavoritesList: boolean;
  handleGetFavorites: () => void;
}

const Card = ({
  game,
  isFavoritesList,
  handleGetFavorites,
}: CardProps) => {
  const token = localStorage.getItem("token");

  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const profile: Profile = JSON.parse(localStorage.getItem("profile") || "");

  const handleSetFavorite = () => {
    const data = {
      userId: profile.id,
      gameName: game.title,
    };

    api
      .post("/favorites", data, headers)
      .then(() => {
        handleGetFavorites();
        toast.success("Game favoritado com sucesso!");
      })
      .catch(() => toast.error("Game já favoritado"));
  };

  const handleRemoveFavorite = async () => {
    const res = await api.get<Favorite[]>(
      `/favorites/profile/${profile?.id}`,
      headers
    );

    const favoriteId: string | undefined = res.data
      .filter((elem) => elem.gameName === game.title)
      .find((elem) => elem.profileId === profile.id)?.id;

    api
      .delete(`/favorites/${favoriteId}`, headers)
      .then(() => {
        handleGetFavorites();
        toast.success("Game desfavoritado com sucesso!");
      })
      .catch(() => toast.error("Erro"));
  };

  return (
    <S.CardStyle>
      <img alt={game.title} src={game.coverImageUrl} />
      <h4>{game.title}</h4>
      <p>{game.genreId}</p>
      <Button
        onClick={isFavoritesList ? handleRemoveFavorite : handleSetFavorite}
        text={
          isFavoritesList ? "Remover dos favoritos" : "Adicionar aos favoritos"
        }
        size="small"
      />
    </S.CardStyle>
  );
};

export default Card;


