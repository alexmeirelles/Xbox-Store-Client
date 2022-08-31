import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profiles from "./pages/Profiles";
import FormEdit from "components/FormEdit";
import ProfileSettings from "pages/ProfileSettings";
import GameSettings from "pages/GameSettings";
import GenreSettings from "pages/GenreSettings";
import GameDetails from "pages/GameDetails";
import { useAuth } from 'contexts/auth';


const Router = () => {
  const { logged } = useAuth();  
    return (
        <Routes>
          {logged ? (
        <>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login/" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/profiles" element={<Profiles />}></Route>
        <Route path="/formedit" element={<FormEdit />}></Route>
        <Route path="/settings/games" element={<GameSettings/>} />
        <Route path="/settings/genres" element={<GenreSettings/>} />
        <Route path="/settings/profiles" element={<ProfileSettings/>} />
        <Route path="/gamedetails/:gameid" element={<GameDetails />} />
        </>
      ) : (
        <Route path="/" element={<Login />} />
      )}     
      <Route
        path="*"
        element={<Navigate to={logged ? "/" : "/"} replace />}
      />
        </Routes>
    
  )
}

export default Router
