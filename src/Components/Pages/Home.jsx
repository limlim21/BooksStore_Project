import React, { useState } from "react";
import "../../App";
import { FaMagic } from "react-icons/fa";
import { GiSpellBook } from "react-icons/gi";
import axios from "axios";

const Home = () => {
  const [search, setSearch] = useState("");
  const [bookData, setData] = useState([]);
  const searchBook = (evt) => {
    if (evt.key === "Enter") {
      axios
        .get("https://example-data.draftbit.com/books?_limit=50")
        .then((res) => setData(res.data.items))
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <div className="d-flex flex-row justify-content-center align-items-center Home">
        <div className="">
          <div className="header">
            <div className="row1">
              <p>
                <GiSpellBook /> Magic
                <br />
                <b>BOOK</b> Store
              </p>
            </div>
            <div className="row2">
              <p>Find Your Book, Here!</p>
            </div>
            <div className="search">
              <input
                className="search-input"
                type="text"
                placeholder="Enter Your Book Name"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyPress={searchBook}
              />
              <button type="button" className="btn btn-primary">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
