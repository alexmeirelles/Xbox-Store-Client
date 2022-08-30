import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profiles from "./pages/Profiles";
import FormEdit from "components/FormEdit";
import ProfileSettings from "pages/ProfileSettings";
import GameSettings from "pages/GameSettings";
import GenreSettings from "pages/GenreSettings";
import GameDetails from "pages/GameDetails";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login/" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/profiles" element={<Profiles />}></Route>
        <Route path="/formedit" element={<FormEdit />}></Route>
        <Route path="/gamesettings" element={<GameSettings/>} />
        <Route path="/genresettings" element={<GenreSettings/>} />
        <Route path="/profilesettings" element={<ProfileSettings/>} />
        <Route path="/gamedetails" element={<GameDetails />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes;
