import React, { useState, useEffect } from "react"
import { Card, Container } from "react-bootstrap"
import { useHistory, useParams } from "react-router-dom"
import API from "../utils/API";
import { useAuth } from "../contexts/AuthContext";
import "./css/polprofile.css";

export default function PolProfile() {
  const { _id } = useParams()
  const { currentUser } = useAuth()
  const [onepol, setPol] = useState([])

  // Load all books and store them with setBooks
  useEffect(() => {
    loadOnePol(_id)
  }, [])

  // Loads all books and sets them to books
  function loadOnePol(_id) {
    API.getPolById(_id)
      .then(res =>
        setPol(res.data)
      )
      .catch(err => console.log(err));
  };

  const favoritePol = () => {
    return currentUser ? <div><p className="mb-0" style={{ color: "black" }}>Watching</p><input type="checkbox" className="ms-1" style={{ cursor: "copy" }}></input></div> : <></>
  };

  return (

    <div className="container">

      <div className="row">
        <div className=" d-flex justify-content-between my-4 px-0">
          <Card className="col-md-3 col-sm-4 p-2 pol-card1">
            <Card.Body className="text-center">
              <h2 className="text-center mb-4">{onepol.name}</h2>
              <img style={{ width: "100%" }} src={onepol.image} className="pol-img" />
              {favoritePol()}
            </Card.Body>
          </Card>

          <Card className=" col-md-8 col-sm-7 p-2">
            <Card.Body>
              <h2 className="text-center mb-4">Info</h2>
              <ul>
                <li><strong>Party:</strong> {onepol.party}</li>
                <li><strong>District:</strong> {onepol._id}</li>
                <li><strong>E-mail:</strong> <a href={"mailto:" + onepol.email}>{onepol.email}</a></li>
                <li><strong>Phone:</strong> {onepol.phone}</li>
                <li><strong>Twitter:</strong> <a href={onepol.twitter ? onepol.twitter.url : ''}>{onepol.twitter ? onepol.twitter.handle : ''}</a></li>
                <li><strong>Facebook:</strong> <a href={onepol.facebook}>{onepol.facebook}</a></li>
              </ul>
            </Card.Body>
          </Card>
        </div>

      </div>

      <Card className="row">
        <Card.Body>
          <h2 className="text-center mb-4">Stats</h2>

          {"database"}

        </Card.Body>
      </Card>

    </div>
  )
}