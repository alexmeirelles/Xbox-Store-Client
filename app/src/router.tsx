import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profiles from "./pages/Profiles";
import FormEdit from "components/FormEdit";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login/" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/profiles" element={<Profiles />}></Route>
        <Route path="/formedit" element={<FormEdit />}></Route>
      </Routes>
    </Router>
  )
}

export default AppRoutes;
