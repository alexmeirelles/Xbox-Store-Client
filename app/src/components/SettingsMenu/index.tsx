import * as S from "./style";
import user from "assets/icons/user.svg";
import profiles from "assets/icons/profiles.svg";
import gameSettings from "assets/icons/gamesettings.svg";
import genreSettings from "assets/icons/genresettings.svg";
import { useNavigate } from "react-router-dom";

interface MenuSettingsProps {
  path: "users" | "profiles" | "games" | "genres";
}

const SettingsMenu = ({ path }: MenuSettingsProps) => {
  const navigate = useNavigate();
  return (
    <S.SettingsNavigationContainer>
      <h2>Settings</h2>
      <S.SettingsNavigationButtonsList>
        <S.SettingsNavigationButtonsContainer
          active={path === "games"}
          onClick={() => navigate("/settings/games")}
        >
          <S.SettingsNavigationButtonSelected active={path === "games"}>
            <img src={gameSettings} alt="" />
            <h2>Manage Games</h2>
            <p></p>
          </S.SettingsNavigationButtonSelected>
        </S.SettingsNavigationButtonsContainer>

        <S.SettingsNavigationButtonsContainer
          active={path === "genres"}
          onClick={() => navigate("/settings/genres")}
        >
          <S.SettingsNavigationButtonSelected active={path === "genres"}>
            <img src={genreSettings} alt="" />
            <h2>Manage Genres</h2>
            <p></p>
          </S.SettingsNavigationButtonSelected>
        </S.SettingsNavigationButtonsContainer>

        <S.SettingsNavigationButtonsContainer
         active={path === "users"}
         onClick={() => navigate("/settings/users")}
         >
          <S.SettingsNavigationButtonSelected active={path === "users"}>
            <img src={user} alt="" />
            <h2>Manage Users</h2>
            <p></p>
          </S.SettingsNavigationButtonSelected>
        </S.SettingsNavigationButtonsContainer>

        <S.SettingsNavigationButtonsContainer
         active={path === "profiles"}
         onClick={() => navigate("/settings/profiles")}
         >
          <S.SettingsNavigationButtonSelected active={path === "profiles"}>
            <img src={profiles} alt="" />
            <h2>Manage Profiles</h2>
            <p></p>
          </S.SettingsNavigationButtonSelected>
        </S.SettingsNavigationButtonsContainer>
      </S.SettingsNavigationButtonsList>
    </S.SettingsNavigationContainer>
  );
};

export default SettingsMenu;
