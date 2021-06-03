import React from "react";
import "./style.css";
import { useAuth } from "../../contexts/AuthContext"

// This file exports both the List and ListItem components

export function List({ children }) {
  return (
    <ul className="list-group">
      <ListItem />
    </ul>
  );
}

export function ListItem({ children }) {
  const {currentUser} = useAuth()

  const favoritePol = () => {
    return currentUser ? <div><p className="mb-0" style={{color:"black"}}>Favorite</p><input type="checkbox" className="ms-4" onClick="favIt(star, def)" style={{cursor:"copy"}}></input></div> : <></>
  };


  return (
    <li className="list-group-item">
      <a className="text-decoration-none" href="/polprofile">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <h1 className="bold d-inline listNum me-3">1</h1>
            <img className="polImg d-inline" src="https://i.imgflip.com/4cis9f.png" />
          </div>

          <h4 className="polName">Joe Biden</h4>

          {favoritePol()}

        </div>
      </a>
      

    </li>
  )
}
