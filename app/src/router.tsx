import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profiles from "./pages/Profiles";
import FormEdit from "components/FormEdit";
import ProfileSettings from "pages/ProfileSettings";
import GameSettings from "pages/GameSettings";
import GenreSettings from "pages/GenreSettings";
import GameDetails from "pages/GameDetails";

const Router = () => {
  return (
    
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login/" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/profiles" element={<Profiles />}></Route>
        <Route path="/formedit" element={<FormEdit />}></Route>
        <Route path="/settings/games" element={<GameSettings/>} />
        <Route path="/settings/genre" element={<GenreSettings/>} />
        <Route path="/settings/profile" element={<ProfileSettings/>} />
        <Route path="/gamedetails/:gameid" element={<GameDetails />} />
      </Routes>
    
  )
}

export default Router
