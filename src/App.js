import './App.css';
import { Route, Routes } from "react-router-dom";
import Homepage from './Components/Homepage';
import Booklist from './Components/Pages/Booklist';
import Home from './Components/Pages/Home';
import BookDetails from './Components/Pages/BookDetails';
import NewNavbar from './Components/Nav/NewNavbar';
import Footer from './Components/Nav/Footer';
import Favorites from './Components/Pages/Favorites';
import Login from './Components/Pages/Login';


function App() {
  return (
    <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route path='/book'exact element={<Booklist/>}/>
      <Route path='/book/:id' exact element={<BookDetails/>}/>
      <Route path='/favorites' exact element={<Favorites/>}/>
      <Route path='/login' exact element={<Login/>}/>
    </Routes>
  );
}

export default App;