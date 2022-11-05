import React from "react";
import "../../App.css";
import { AiFillStar } from "react-icons/ai";
import { useAppContext } from "../Context/appContext";
import { useNavigate } from "react-router-dom";

const ReadBook = () => {
  const navigate = useNavigate();

  const { readBook, addToReadBook, removeFromReadBook, moveFavoriteToRead } =
    useAppContext();

  const readChecker = (id) => {
    const boolean = readBook.some((book) => book.id === id);
    return boolean;
  };

  return (
    <div className="ReadBook">
      <div className="container">
        <div className="col">
          <h1 className="display-6 fw-bolder text-center">Read</h1>
          <hr />
        </div>
        <div className="favorites-list">
          {readBook.length > 0 ? (
            readBook.map((book) => (
              <div className="">
                <div key={book.id} className="">
                  <div className="">
                    <div
                      className="card col-md-3 cd-content"
                      style={{ width: "16rem" }}
                    >
                      <img
                        src={book.image_url}
                        className="card-img-top"
                        alt="..."
                        onClick={() => navigate(`/books/${book.id}`)}
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
                          <button
                            className="btn btn-outline-success"
                            onClick={() => removeFromReadBook(book.id)}
                          >
                            Delete Book{" "}
                          </button>
                          <button
                            href="/detail/:id"
                            className="btn btn-primary buy-btn"
                            style={{ marginLeft: "10px" }}
                            onClick={() => addToReadBook(book)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="fav-msg">
              <img src="/images/book.jpg" alt="" />
              <h2>You haven't read any books!</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReadBook;
