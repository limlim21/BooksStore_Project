import React from "react";
//import '../App';
import { GiSpellBook } from "react-icons/gi";

const NewNavbar = () => {
    return(
        <div className="new-navbar">
            <div>
                <h1><GiSpellBook/> Magic Book</h1>
            </div>
            <div>
                <p>Your Favorities</p>
            </div>
        </div>
    );
};

export default NewNavbar;