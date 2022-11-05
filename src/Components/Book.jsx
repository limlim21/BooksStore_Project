import React from "react";
import "../../src/App.css";
import { GrFavorite } from "react-icons/gr";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
//import { useNavigate } from "react-router-dom";

//API Book-Google

const Book = ({ book }) => {
  return (
    <>
      {book.map((item) => {
        const cover = item.volumeInfo.imageLinks.smallThumbnail;
        const authors = item.volumeInfo.authors;
        const titleBook = item.volumeInfo.title;
        const rating = item.volumeInfo.averageRating;
        const amount = item.saleInfo.retailPrice.amount;
        if (cover !== undefined) {
          return (
            <>
              <div className="row justify-content-center">
                <div className="card cd-content" style={{ width: "18rem" }}>
                  <img src={cover} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <p className="card-text">{authors}</p>
                    <h6 className="card-title">
                      <b>{titleBook}</b>
                    </h6>
                    <h6 className="card-text-price">
                      <b>IDR {amount}</b>
                    </h6>
                    <h5 className="rating-icon d-flex flex-row justify-content-start">
                      <AiFillStar />
                      <h6 className="rating-text">{rating}</h6>
                    </h5>
                    <div className="d-flex flex-row justify-content-between">
                      <a
                        href="/favorites"
                        className="btn btn-outline-danger btn-count fav-btn"
                      >
                        <GrFavorite />
                      </a>
                      <Link className="btn btn-primary buy-btn">
                        See Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        }
      })}
    </>
  );
};

//API Book-1
/*
const Book = ({ book }) => {
  console.log(book);
  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();
  const navigate = useNavigate();

  const favoritesChecker = (id) => {
    const boolean = favorites.some((book) => book.id === id);
    return boolean;
  };
  return (
    <>
      {book.map((data) => {
        const cover = data.image_url;
        const author = data.authors;
        const title = data.title;
        const rating = data.rating;
        if (cover !== undefined) {
          return (
            <>
              <div className="row justify-content-center">
                <div className="card cd-content" style={{ width: "18rem" }}>
                  <img src={cover} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <p className="card-text">{author}</p>
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text-price">
                      <b>IDR 50.000</b>
                    </p>
                    <h5 className="rating-icon d-flex flex-row justify-content-start">
                      <AiFillStar />
                      <h6 className="rating-text">{rating}</h6>
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

                      <a className="btn btn-primary buy-btn" 
                      onClick={() => navigate(`/books/${book.id}`)}>
                        See Details
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        }
      })}
    </>
  );
};*/

export default Book;
