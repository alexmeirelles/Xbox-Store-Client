import Header from '../../components/Header/index';
import * as S from "./style";
import { Genre, Favorite, Game, Profile } from "utils/types/index";
import { useEffect, useState } from "react";
import api from 'services/api';
import GamesList from 'components/ListGames';
import { useNavigate } from 'react-router-dom';
import { useGames } from "contexts/games";
import { useGenres } from "contexts/genres";


const Home = () => {
  const { games } = useGames();
  const { genres } = useGenres();

  const [selectedGenre, setSelectedGenre] = useState<Genre>(
    genres[0] || ({} as Genre)
  );

  const [isFavoritesList, setIsFavoritesList] = useState<boolean>(false);
  const [profileFavoritesList, setProfileFavoritesList] = useState<Game[]>([]);
  
  const filteredGames: Game[] = games.filter(
    (element) => selectedGenre && element.genreId === selectedGenre.id
  );

  const handleGetFavorites = async () => {
   const token = localStorage.getItem("token");

   const headers = {
     headers: {
       Authorization: `Bearer ${token}`,
     },
   };

   const profile: Profile = JSON.parse(localStorage.getItem("profile") || "");

   const res = await api.get<Favorite[]>(
     `/favorites/profile/${profile?.id}`,
     headers
   );

   const favorites = res.data;

   const favoritesNames: string[] = favorites.map((elem) => elem.gameName);

   const favoritesList: Game[] = games.filter((elem) => {
     return favoritesNames.includes(elem.title);
   });

   setProfileFavoritesList(favoritesList);
 };

 useEffect(() => {
   handleGetFavorites();
 }, [games, isFavoritesList]);

   return (
       <>
           <Header />
           <S.LoginContainer>
            {genres.map((element) => {
              return (
                <S.CategoriesNavigationButton
                  active={element.genre === selectedGenre.genre}
                  onClick={() => {
                    setSelectedGenre(element);
                    setIsFavoritesList(false);
                  }}
                  key={element.id}
                >
                  {element.genre}
                </S.CategoriesNavigationButton>
              );
            })}
            <S.CategoriesNavigationButton
              active={isFavoritesList}
              onClick={() => {
                setIsFavoritesList(true);
                setSelectedGenre({} as Genre);
              }}
            >
              Favoritos
            </S.CategoriesNavigationButton>
          </S.LoginContainer>         
       <GamesList
       isFavoritesList={isFavoritesList}
       handleGetFavorites={handleGetFavorites}
       game={
         isFavoritesList
           ? profileFavoritesList
            : filteredGames
           ? filteredGames.filter((elem) =>
               elem.title
                 .toLowerCase()
             )
           : filteredGames
          }
     />
     </>
   )
}


export default Home;