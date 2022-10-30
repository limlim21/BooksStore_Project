import React, { useState, useEffect } from "react";
//import { Stack, Spinner, Image } from "react-bootstrap";
//import { Link } from 'react-router-dom';
import "../../App";
import axios from "axios";
import { API_URL } from "../../API";
import { AiFillStar } from "react-icons/ai";
import { Button } from "bootstrap";

const Booklist = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        console.log(res.data);
        setBooks(res.data);
      })
      .catch((err) => console.error(err));
  }, [API_URL]);

  return (
    <>
      <div className="book-list">
        {books.map((book) => (
          <div key={book.id} className="book">
            <div>
              <h3>{book.title}</h3>
            </div>
            <div>
              <img src={book.image_url} alt="#" />
            </div>
            <div className="rating">
              <h4 className="rating-icon">
                <AiFillStar />
              </h4>
              <h4>{book.rating}</h4>
            </div>
            <div className="add-favorite">
              <button type="button" className="btn btn-outline-danger">
                Add to Favorite
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Booklist;
