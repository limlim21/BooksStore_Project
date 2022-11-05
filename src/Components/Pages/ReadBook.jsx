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
    <>
      <div className="ReadBook">
        <div className="container">
          <div className="col">
            <h1 className="display-6 fw-bolder text-center">Cart</h1>
            <hr />
          </div>
          <div className="read-list">
            {readBook.length > 0 ? (
              readBook.map((book) => (
                <div className="">
                  <div key={book.id} className="">
                    <div className="">
                      <div class="card mb-3" style={{ width: "1100px" }}>
                        <div class="row g-0">
                          <div class="col-md-2">
                            <img
                              src={book.image_url}
                              class="img-fluid rounded-start"
                              alt="..."
                              style={{ width: "8rem" }}
                              onClick={() => navigate(`/books/${book.id}`)}
                            />
                          </div>
                          <div class="col-md-10">
                            <div
                              class="card-body"
                              style={{ maxHeight: "200px" }}
                            >
                              <h5 class="card-title">{book.title}</h5>
                              <div className="d-flex flex-row mb-2">
                                <p class="card-text">
                                  <p className="card-text">
                                    {book.authors} ({" "}
                                    <small> {book.genres}</small>){" "}
                                  </p>
                                </p>
                              </div>
                              <h5 className="rating-icon d-flex flex-row justify-content-start">
                                <AiFillStar />
                                <h6 className="rating-text">{book.rating}</h6>
                              </h5>
                              <p className="card-text-price">
                                <b>Today, It's FREE!</b>
                              </p>
                              <button
                                className="btn btn-outline-success"
                                onClick={() => removeFromReadBook(book.id)}
                              >
                                Delete Book
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
                </div>
              ))
            ) : (
              <div className="fav-msg" style={{}}>
                <img src="/images/book.jpg" alt="" />
                <h2>You haven't read any books!</h2>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ReadBook;
