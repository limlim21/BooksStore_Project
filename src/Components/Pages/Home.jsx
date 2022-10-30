import React, { useState } from "react";
import "../../App";
import { FaMagic } from "react-icons/fa";
import { GiSpellBook } from "react-icons/gi";
import axios from "axios";
import Card from "../Book";
import Book from "../Book";
import Booklist from "./Booklist";

const Home = () => {
  const [search, setSearch] = useState("");
  const [bookData, setData] = useState([]);
  const searchBook = (evt) => {
    if (evt.key === "Enter") {
      axios
        .get("https://example-data.draftbit.com/books?_limit=10")
        .then((res) => setData(res.data.items))
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <div className="Home">
        <div className="card bg-dark text-white border-0 Header">
          <div className="card-img-overlay d-flex flex-column justify-content-center">
            <h5 className="card-title display-3 fw-bolder mb-0">
              NEW BOOK ARRIVALS
            </h5>
            <p className="card-text lead fs-2">FIND YOUR BOOK HERE !</p>
            <div className="search">
              <input
                type="text"
                placeholder="Search title book..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyPress={searchBook}
              />
              <button type="button" className="btn btn-primary search-button">
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="container mt-5 mb-4">
          <div className="row">
            <div className="col-12">
              <h1 className="display-6 fw-bolder text-center">Result Book</h1>
              <hr />
            </div>
          </div>
        </div>
        <div className="container d-grid gap-5">
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
        </div>
      </div>
    </>
  );
};

export default Home;
