import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Home } from './components/Home/Home';
import { CreateRecipe } from './components/CreateRecipe/CreateRecipe';
import { SavedRecipes } from './pages/SavedRecipes';
import { NavBar } from './components/Navbar/NavBar';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import NotFound from './components/NotFound';
import axios from 'axios';
import SingleRecipe from './components/SingleRecipe/SingleRecipe';
import Footer from './components/Navbar/Footer';
axios.defaults.baseURL='http://localhost:3001/';
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/create-recipe" element={<CreateRecipe/>}/>
          <Route path="/saved-recipes" element={<SavedRecipes/>}/>
          <Route path="/single-recipe" element={<SingleRecipe/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Router>
      <Footer/>
    </div>
  )
}

export default App
