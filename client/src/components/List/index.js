import React from "react";
import "./style.css";

// This file exports both the List and ListItem components

export function List({ children }) {
  return (
      <ul className="list-group">
        <ListItem />
      </ul>
  );
}

export function ListItem({ children }) {
  return (
    <li className="list-group-item">
      <a className="text-decoration-none" href="/polprofile">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <h1 className="bold d-inline listNum">1</h1>
            <img className="polImg d-inline" src="https://i.imgflip.com/4cis9f.png"/>
          </div>
          
          <h4 className="polName">Joe Biden</h4>

        </div>
      </a>
    
    </li>
  )
}
