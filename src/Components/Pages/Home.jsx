import React, { useState } from "react";
import "../../App";
import axios from "axios";
import Book from "../Book";

const Home = () => {
  const [search, setSearch] = useState("");
  const [bookData, setData] = useState([]);
  //const [loading, setLoading] = useState(false);

  const searchBook = (evt) => {
    if (evt.key === "Enter") {
      axios
        //API book-1
        //.get("https://example-data.draftbit.com/books?_limit=12" + search)

        //API book-google
        .get(
          "https://www.googleapis.com/books/v1/volumes?q=" +
            search +
            "&filter=paid-ebooks" +
            "&key=AIzaSyCLsjHheFJXHh4NkOpKTlfYOM8orIsHLNA" +
            "&maxResults=15"
        )
        //.then((res) => setData(res.data))
        .then((res) => setData(res.data.items))
        .catch((err) => console.log(err));
    }
  };

  //const Loading = () => {
  //  return <>Loading....</>;
  //};

  return (
    <>
      <div className="Home">
        <div className="card bg-dark text-white border-0 Header">
          <img src="/images/bg.jpg" class="card-img-bg" alt="..." />
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
              <button type="button" className="btn btn-dark search-button">
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
          {/*<div className="row justify-content-center">
            {loading ? <loading /> : <searchBook />}
          </div>*/}
        </div>
        <div className="container d-grid gap-5">
          <Book book={bookData} />
        </div>
      </div>
    </>
  );
};

export default Home;
