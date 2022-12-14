import React, { useState, useEffect } from "react";
//import { Stack, Spinner, Image } from "react-bootstrap";
//import { Link } from 'react-router-dom';
import "../../App";
import axios from "axios";
import { API_URL } from "../../API";
import { AiFillStar } from "react-icons/ai";
import { GrFavorite } from "react-icons/gr";
import Skeleton from "react-loading-skeleton";
import { useAppContext } from "../Context/appContext";
import { useNavigate } from "react-router-dom";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [filter, setFilter] = useState(books);
  const [loading, setLoading] = useState(false);

  //API googleBook
  //const [items, setItems] = useState([]);
  //const [filter, setFilter] = useState(items);

  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();

  const navigate = useNavigate();

  const favoritesChecker = (id) => {
    const boolean = favorites.some((book) => book.id === id);
    return boolean;
  };

  //const favoritesChecker = (id) => {
  //  const boolean = favorites.some((item) => item.id === id);
  //  return boolean;
  //};

  let componentMounted = true;

  /*useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        console.log(res.data);
        setBooks(res.data);
      })
      .catch((err) => console.error(err));
  }, [API_URL]);*/

  useEffect(() => {
    const getBooks = async () => {
      setLoading(true);
      const response = await fetch(API_URL);
      if (componentMounted) {
        setBooks(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }
      return () => {
        componentMounted = false;
      };
    };

    getBooks();
  }, [API_URL]);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  const filterBook = (cat) => {
    const updateList = [];
    const filterLowered = cat.toLowerCase();
    books.forEach((book) => {
      if (book.genres.toLowerCase().includes(filterLowered)) {
        updateList.push(book);
      }
    });
    setFilter(updateList);
  };

  const ShowBook = ({}) => {
    return (
      <>
        <div className="buttons d-flex justify-content-center align-items-center mb-5">
          <div className="">
            <button
              className="btn btn-outline-dark"
              onClick={() => setFilter(books)}
            >
              All
            </button>
            <button
              className="btn btn-outline-dark"
              onClick={() => filterBook("Children")}
            >
              Children
            </button>
            <button
              className="btn btn-outline-dark"
              onClick={() => filterBook("Fantasy")}
            >
              Fantasy
            </button>
            <button
              className="btn btn-outline-dark"
              onClick={() => filterBook("Fiction")}
            >
              Fiction
            </button>
            <button
              className="btn btn-outline-dark"
              onClick={() => filterBook("Humor")}
            >
              Humor
            </button>
            <button
              className="btn btn-outline-dark"
              onClick={() => filterBook("Literature")}
            >
              Literature
            </button>
            <button
              className="btn btn-outline-dark"
              onClick={() => filterBook("Mystery")}
            >
              Mystery
            </button>
            <button
              className="btn btn-outline-dark"
              onClick={() => filterBook("Romance")}
            >
              Romance
            </button>
            <button
              className="btn btn-outline-dark"
              onClick={() => filterBook("School")}
            >
              School
            </button>
            <button
              className="btn btn-outline-dark"
              onClick={() => filterBook("Science")}
            >
              Science
            </button>
          </div>
        </div>
        <div className="book-list">
          {filter.map((book) => {
            return (
              <>
                <div key={book.id}>
                  <div
                    className="card col-md-3 cd-content"
                    style={{ width: "16rem" }}
                  >
                    <img
                      src={book.image_url}
                      className="card-img-top"
                      alt="#"
                    />
                    <div className="card-body">
                      <p className="card-text">{book.authors}</p>
                      <h5 className="card-title">{book.title}</h5>
                      <p className="card-text">
                        <small>{book.genres}</small>
                      </p>
                      <p className="card-text-price">
                        <b>IDR 50.000</b>
                      </p>
                      <h5 className="rating-icon d-flex flex-row justify-content-start">
                        <AiFillStar />
                        <h6 className="rating-text">{book.rating}</h6>
                      </h5>
                      <div className="d-flex flex-row justify-content-between">
                        {favoritesChecker(book.id) ? (
                          <button
                            href="/favorites"
                            className="btn btn-danger btn-count fav-btn"
                            onClick={() => removeFromFavorites(book.id)}
                          >
                            <GrFavorite />
                          </button>
                        ) : (
                          <button
                            href="/favorites"
                            className="btn btn-outline-danger btn-count fav-btn"
                            onClick={() => addToFavorites(book)}
                          >
                            <GrFavorite />
                          </button>
                        )}

                        <button
                          className="btn btn-primary buy-btn"
                          style={{ marginLeft: "10px" }}
                          onClick={() => navigate(`/books/${book.id}`)}
                        >
                          See Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>

        {/*API googleBook
        {filter.map((item) => {
          return (
            <>
              <div key={item.id} className="">
                <div className="">
                  <div
                    className="card col-md-3 cd-content"
                    style={{ width: "16rem" }}
                  >
                    <img
                      src={item.image_url}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <p className="card-text">{item.authors}</p>
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">
                        <small>{item.genres}</small>
                      </p>
                      <p className="card-text-price">
                        <b>IDR 50.000</b>
                      </p>
                      <h5 className="rating-icon d-flex flex-row justify-content-start">
                        <AiFillStar />
                        <h6 className="rating-text">{item.rating}</h6>
                      </h5>
                      <div className="d-flex flex-row justify-content-between">
                        {favoritesChecker(item.id) ? (
                          <button
                            href="/favorites"
                            className="btn btn-danger btn-count fav-btn"
                            onClick={() => removeFromFavorites(item.id)}
                          >
                            <GrFavorite />
                          </button>
                        ) : (
                          <button
                            href="/favorites"
                            className="btn btn-outline-danger btn-count fav-btn"
                            onClick={() => addToFavorites(item)}
                          >
                            <GrFavorite />
                          </button>
                        )}

                        <button
                          href="/detail/:id"
                          className="btn btn-primary buy-btn"
                          style={{ marginLeft: "10px" }}
                        >
                          See Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}*/}
      </>
    );
  };

  return (
    <>
      <div className="bookList-container d-flex flex-column">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="display-6 fw-bolder text-center">Category</h1>
              <hr />
            </div>
          </div>
          <div className="row justify-content-center">
            {loading ? <Loading /> : <ShowBook />}
          </div>
        </div>
      </div>
    </>
  );
};

export default BookList;
