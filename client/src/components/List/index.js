import React, { useState, useEffect, useContext } from "react";
import "./style.css";
import { useAuth } from "../../contexts/AuthContext"
import { db } from "../../firebase"
import DataContext from "../../contexts/DataContext";
import useLocalStorage from '../../CustomHook/useLocalStorage'

// This file exports both the List and ListItem components

export function List({ children }) {
  const pols = useContext(DataContext)

  return (
    <>
      {pols.length ? (
        <ul className="list-group" id="List">

          {pols.map(pol => (

            <ListItem key={pol._id} name={pol.name} image={pol.image} district={pol._id} party={pol.party} />
          ))}

        </ul>
      ) : (
        <h3>No Results to Display</h3>
      )}
    </>

  );
}

export function ListItem({ name, image, district, party }) {
  const [check, setCheck] = useState(false)
  const [polid, setPolId] = useState('congressman' + district)
  const { currentUser } = useAuth()
  const [savedcheck, setSavedCheck] = useLocalStorage(polid, []);

  const favoritePol = () => {
    //savedcheck ? setCheck(true) : setCheck(false)
    return currentUser ? <div><p className="mb-0" style={{ color: "black" }}>Watching</p><input id={polid} checked={check} onChange={handleChange} type="checkbox" className="ms-4" style={{ cursor: "copy" }}></input></div> : <></>
  };

  const checkOff = () => {
    setCheck(false)
    setSavedCheck(false)
    console.log(polid + ' is off')

    db.collection(currentUser.uid).doc(polid).delete()
      .then(console.log('deleted from database!'))
  }

  //function saveChecks() {
  // Similar to useState but first arg is key to the value in local storage.}

  const checkOn = () => {
    setCheck(true)
    setSavedCheck(true)
    console.log(polid + ' is on')

    db.collection(currentUser.uid).doc(polid).set(
      {
        watch: polid
      })
      .then(console.log('submitted to database!'))
  }

  const handleChange = (e) => {
    e.preventDefault();
    setSavedCheck(e.target.id)

    return check ? checkOff() : checkOn()
  }

  

  return (
    <li id={"d" + district} className={"list-group-item"}>
      <a className="text-decoration-none" href={"/polprofile/" + district} >
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <img className="polImg d-inline" width="100px" height="100px" src={image} />

          </div>
          <div className="d-flex flex-column align-items-center justify-content-center">
            <h4 className="pol-name">{name}</h4>
            <h5 className="pol-distr">District: {district}</h5>
            <h5 className={`pol-party pol-party-${party}`}>{party}</h5>
          </div>
          {favoritePol()}

        </div>
      </a>


    </li>
  )
}
