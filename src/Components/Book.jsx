import React from "react";
import "../../src/App.css";
import { GrFavorite } from "react-icons/gr";
import { MdOutlineAttachMoney } from "react-icons/md";

const Book = () => {
  return (
    <>
      <div className="row justify-content-center">
        <div className="card cd-book" style={{ width: "18rem" }}>
          <img src="/images/book.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Book title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <div className="d-flex flex-row justify-content-between">
              <a href="#" className="btn btn-outline-danger fav-btn">
                <GrFavorite />
              </a>
              <a href="/login" className="btn btn-primary buy-btn">
                <MdOutlineAttachMoney />
                999
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Book;
