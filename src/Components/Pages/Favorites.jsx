import React from "react";
//import './App.css';
import { useAppContext } from "../Context/appContext";
import { AiFillStar } from "react-icons/ai";
import { GrFavorite } from "react-icons/gr";

const Favorites = () => {
  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();
  console.log("favorites are", favorites);

  const favoritesChecker = (id) => {
    const boolean = favorites.some((book) => book.id === id);
    return boolean;
  };

  return (
    <div className="container">
      <div className="col">
        <h1 className="display-6 fw-bolder text-center">Your Fav!</h1>
        <hr />
      </div>
      <div className="favorites-list">
        {favorites.length > 0 ? (
          favorites.map((book) => (
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
            </div>
          ))
        ) : (
          <h2 className="d-flex justify-content-center">
            You don't have any favorite books yet!
          </h2>
        )}
      </div>
    </div>
  );
};

export default Favorites;
