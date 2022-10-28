import React, { useState } from "react";
import { TbBooks } from 'react-icons/tb';
import { FaMagic } from 'react-icons/fa';
import axios from "axios";
import button from "react-bootstrap";
import Navbar from "./Nav/Navbar";
import './Homepage.css';

const Homepage = () => {
    const [search,setSearch]=useState("");
    const [bookData,setData]=useState([]);
    const searchBook=(evt)=>{
        if(evt.key==="Enter")
        {
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyCLsjHheFJXHh4NkOpKTlfYOM8orIsHLNA'+'&maxResults=40')
            .then(res=>setData(res.data.items))
            .catch(err=>console.log(err))
        }
    }

    return(
        <>        
        <div className="d-flex flex-row justify-content-center align-items-center home" 
            style={{Homepage}}>
            <div className="container">
                <div className="header">
                    <div className="row1">
                        <p><FaMagic/> Magic 
                        <br />
                        <b>BOOK</b> Store</p></div>
                    <div className="row2">
                        <p>Find Your Book, Here!</p>
                    </div>
                    <div className="search">
                        <input className="search-input"
                            type="text" placeholder="Enter Your Book Name" 
                            value={search} onChange={e=>setSearch(e.target.value)}
                            onKeyPress={searchBook}/>
                        <button type="button" className="btn btn-primary">Search</button>
                    </div>
                </div>
                <div className="image">
                    <img src="" alt=""/>
                </div>
            </div>
        </div>
        </>
    )
}

export default Homepage;