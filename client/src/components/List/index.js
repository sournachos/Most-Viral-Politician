import React, { useState, useEffect } from "react";
import "./style.css";
import { useAuth } from "../../contexts/AuthContext"
import API from "../../utils/API";
// import pyScraper from "../../../../webscraper/mongo/index"

// This file exports both the List and ListItem components

export function List({ children }) {
  const [pols, setPols] = useState([])

  // Load all books and store them with setBooks
  useEffect(() => {
     loadPols()
  }, [])

  // Loads all books and sets them to books
   function loadPols() {
     API.getPols()
      .then(res =>
        setPols(res.data)
      )
      .catch(err => console.log(err));
  };

  return (
    <>
      {pols.length ? (
        <ul className="list-group" id="List">

          {pols.map(pol => (
            <ListItem key={pol._id} name={pol.name} image={pol.image} />
          ))}

        </ul>
      ) : (
        <h3>No Results to Display</h3>
      )}
    </>

  );
}

export function ListItem({name, image}) {
  const { currentUser } = useAuth()

  const favoritePol = () => {
    return currentUser ? <div><p className="mb-0" style={{ color: "black" }}>Favorite</p><input type="checkbox" className="ms-4" onClick="favIt(star, def)" style={{ cursor: "copy" }}></input></div> : <></>
  };
  // console.log(pyScraper)

  return (
    <li className="list-group-item">
      <a className="text-decoration-none" href="/polprofile">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <img className="polImg d-inline" src={image} />

          </div>

          <h4 className="polName">{name}</h4>

          {favoritePol()}

        </div>
      </a>


    </li>
  )
}
