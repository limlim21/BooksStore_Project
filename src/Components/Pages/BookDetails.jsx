import React from "react";
import "../../App";
import { Image, Stack } from "react-bootstrap";

const BookDetails = ({ id, detailBookData }) => {
  return (
    <>
      <div className="Book-Details">
        <div className="container text-center mt-5">
          <h1>Detail Title Book</h1>
        </div>
        <div className="container d-flex justify-content-center align-items-center mt-5">
          <div className="card mb-3" style={{ maxWidth: "800px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src="..." className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h6 className="card-text">
                    <small className="text-muted">Authors Name</small>
                  </h6>
                  <h5 className="card-title">
                    <b>Title Book 999</b>
                  </h5>
                  <hr />
                  <p className="card-title">
                    <b> Book Description</b>
                  </p>
                  <p className="card-text">
                    <small>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Exercitationem, iure veritatis fugit dolore velit esse id,
                      ex consectetur quis officia pariatur minima blanditiis,
                      perferendis assumenda voluptatibus? Quos error sequi
                      minima.
                    </small>
                  </p>
                  <br />
                  <p className="card-title">
                    <b>Detail</b>
                  </p>
                  <p className="row row-cols-2">
                    <p className="col card-title d-flex flex-column">
                      <small>Number of pages </small>
                      <small>-</small>
                    </p>
                    <p className="col card-title d-flex flex-column">
                      <small>Publisher </small>
                      <small>-</small>
                    </p>
                    <p className="col card-title d-flex flex-column">
                      <small>Date of issue </small>
                      <small>-</small>
                    </p>
                    <p className="col card-title d-flex flex-column">
                      <small>ISBN</small>
                      <small>-</small>
                    </p>

                    <p className="col card-title d-flex flex-column">
                      <small>Language</small>
                      <small>-</small>
                    </p>
                  </p>
                  <div className="d-flex flex-row justify-content-between">
                    <button className="btn btn-outline-danger">favorite</button>
                    <button className="btn btn-success">buy</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookDetails;
