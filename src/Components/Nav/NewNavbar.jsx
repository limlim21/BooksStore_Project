import React, { useState } from "react";
//import '../App';
import { GiSpellBook } from "react-icons/gi";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { SlBookOpen } from "react-icons/sl";

const NewNavbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  return (
    <div className="new-navbar">
      <Link to="/" className="navbar-logo">
        <GiSpellBook className="nav-icon" />
        <p className="nav-title"> Magic</p>
      </Link>
      <div>
        <ul className={click ? "nav-menu-active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/book" className="nav-link">
              Booklist
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/favorites" className="nav-link">
              Favorite
            </Link>
          </li>
          <li className="nav-btn cart-btn" style={{ marginRight: "15px" }}>
            {button ? (
              <Link to="/book/read" className="btn-link">
                <Button variant="light">
                  <b>Read Book</b> <SlBookOpen />
                </Button>
              </Link>
            ) : (
              <Link to="/book/read" className="btn-link">
                <Button variant="outline-light" size="sm">
                  Cart
                </Button>
              </Link>
            )}
          </li>
          {/*<li className="nav-btn">
            {button ? (
              <Link to="/login" className="btn-link">
                <Button variant="outline-light">
                  <b>Login</b>
                </Button>
              </Link>
            ) : (
              <Link to="/login" className="btn-link">
                <Button variant="outline-light" size="sm">
                  LOG IN
                </Button>
              </Link>
            )}
            </li>*/}
        </ul>
      </div>
    </div>
  );
};

export default NewNavbar;
