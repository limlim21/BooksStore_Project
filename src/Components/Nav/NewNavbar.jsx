import React from "react";
//import '../App';
import { GiSpellBook } from "react-icons/gi";

const NewNavbar = () => {
    return(
        <div className="navbar">
            <div>
                <GiSpellBook/> <h1>Magic Book</h1>
            </div>
            <div>
                <p>Your Favorities</p>
            </div>
        </div>
    );
};

export default NewNavbar;