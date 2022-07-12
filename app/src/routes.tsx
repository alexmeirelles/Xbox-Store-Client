import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import User from './pages/User';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login/" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/users" element={<User />}></Route>
      </Routes>
    </Router>
  )
}

export default AppRoutes;
