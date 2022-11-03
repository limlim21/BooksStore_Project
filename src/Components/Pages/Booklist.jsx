import React, { useState, useEffect } from "react";
//import { Stack, Spinner, Image } from "react-bootstrap";
//import { Link } from 'react-router-dom';
import "../../App";
import axios from "axios";
import { API_URL } from "../../API";
import { AiFillStar } from "react-icons/ai";
import { GrFavorite } from "react-icons/gr";
import { Button } from "bootstrap";
import Skeleton from "react-loading-skeleton";

const Booklist = () => {
  const [books, setBooks] = useState([]);
  const [filter, setFilter] = useState(books);
  const [loading, setLoading] = useState(false);
  const componentMounted = true;

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        console.log(res.data);
        setBooks(res.data);
      })
      .catch((err) => console.error(err));
  }, [API_URL]);

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
    const updateList = books.filter((x) => x.genres === cat);
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
        {filter.map((book) => {
          return (
            <>
              <div key={book.id} className="">
                <div className="book-list">
                  <div
                    className="card col-md-3 cd-content"
                    style={{ width: "16rem" }}
                  >
                    <img
                      src={book.image_url}
                      className="card-img-top"
                      alt="..."
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
                        <a
                          href="/favorites"
                          className="btn btn-outline-danger btn-count fav-btn"
                        >
                          <GrFavorite />
                        </a>
                        <a
                          href="/detail/:id"
                          className="btn btn-primary buy-btn"
                          style={{ marginLeft: "10px" }}
                        >
                          See Details
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <>
      <div className="blist d-flex flex-column">
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

        {/*{
          <div className="book-list">
            {books.map((book) => (
              <div key={book.id} className="book">
                <div className="container row justify-content-center">
                  <div className="card cd-content" style={{ width: "18rem" }}>
                    <img
                      src={book.image_url}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <p className="card-text">{book.authors}</p>
                      <h5 className="card-title">{book.title}</h5>
                      <p className="card-text-price">
                        <b>IDR 50.000</b>
                      </p>
                      <h5 className="rating-icon d-flex flex-row justify-content-start">
                        <AiFillStar />
                        <h6 className="rating-text">{book.rating}</h6>
                      </h5>
                      <div className="d-flex flex-row justify-content-between">
                        <a
                          href="/favorites"
                          className="btn btn-outline-danger btn-count fav-btn"
                        >
                          <GrFavorite />
                        </a>
                        <a
                          href="/detail/:id"
                          className="btn btn-primary buy-btn"
                          style={{ marginLeft: "10px" }}
                        >
                          See Details
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        }*/}
      </div>
    </>
  );
};

export default Booklist;
