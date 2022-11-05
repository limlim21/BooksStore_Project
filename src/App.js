import "./App.css";
import { Route, Routes } from "react-router-dom";
import Booklist from "./Components/Pages/Booklist";
import Home from "./Components/Pages/Home";
import BookDetails from "./Components/Pages/BookDetails";
import Favorites from "./Components/Pages/Favorites";
import Login from "./Components/Pages/Login";
import ReadBook from "./Components/Pages/ReadBook";
import NewNavbar from "./Components/Nav/NewNavbar";
import Footer from "./Components/Nav/Footer";

function App() {
  return (
    <div className="App">
      <NewNavbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/book" exact element={<Booklist />} />
        <Route path="/books/:id" exact element={<BookDetails />} />
        <Route path="/favorites" exact element={<Favorites />} />
        <Route path="/books/read" exact element={<ReadBook />} />
        <Route path="/login" exact element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
