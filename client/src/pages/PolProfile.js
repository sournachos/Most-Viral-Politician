import React, { useState, useEffect } from "react"
import { Card, Container } from "react-bootstrap"
import { useHistory, useParams } from "react-router-dom"
import API from "../utils/API";

export default function PolProfile() {
  const { _id } = useParams()

  const [onepol, setPol] = useState([])

  // Load all books and store them with setBooks
  useEffect(() => {
    loadOnePol()
  }, [])

  // Loads all books and sets them to books
  function loadOnePol(_id) {
    API.getPolById(_id)
      .then(res =>
        setPol(res.data)
      )
      .catch(err => console.log(err));
  };

  console.log(_id);

  return (
    
    <>
      <div className=" d-flex my-4 ">
        <Card className=" p-2 w-25 me-4">
          <Card.Body>
            <h2 className="text-center mb-4">{_id}</h2>
          <img style={{width:"100%"}} src={onepol.image}/>
          </Card.Body>
        </Card>

        <Card className=" p-2 flex-grow-1">
          <Card.Body>
            <h2 className="text-center mb-4">Info</h2>
            <ul>
            <li><strong>Name:</strong> {onepol.name}</li>
            <li><strong>District:</strong> {onepol._id}</li>
            <li><strong>E-mail:</strong> {onepol.email}</li>
            <li><strong>Phone:</strong> {onepol.phone}</li>
            <li><strong>Twitter:</strong> {onepol.twitter}</li>
            <li><strong>Facebook:</strong> {onepol.facebook}</li>
            </ul>
          </Card.Body>
        </Card>
      </div>

      <Card className="w-100  mb-2">
        <Card.Body>
          <h2 className="text-center mb-4">Stats</h2>

          {"database"}

        </Card.Body>
      </Card>

    </>
  )
}