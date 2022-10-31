import React from "react";
import "../../src/App.css";
import { GrFavorite } from "react-icons/gr";
import { MdOutlineAttachMoney } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";

//API Book-Google

const Book = ({ book }) => {
  console.log(book);
  return (
    <>
      {book.map((item) => {
        const cover = item.volumeInfo.imageLinks.smallThumbnail;
        const authors = item.volumeInfo.authors;
        const titleBook = item.volumeInfo.title;
        const rating = item.volumeInfo.averageRating;
        //const amount = item.saleInfo.listPrice.amount;
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
                      <b>IDR 50.000</b>
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
                      <a href="/detail/:id" className="btn btn-primary buy-btn">
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
};

//API Book-1
/*
const Book = ({ book }) => {
  console.log(book);
  return (
    <>
      {book.map((data) => {
        const cover = data.image_url;
        const author = data.authors;
        const title = data.title;
        const rating = data.rating;

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
                    <a
                      href="/favorites"
                      className="btn btn-outline-danger btn-count fav-btn"
                    >
                      <GrFavorite />
                    </a>
                    <a href="/detail/:id" className="btn btn-primary buy-btn">
                      See Details
                    </a>
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
*/

export default Book;
