import React from "react"
import { Button, Card} from "react-bootstrap"
import { List, ListItem } from "../components/List"
import Map from "../components/Map"
//import { Link} from "react-router-dom"

export default function Home() {
  return (
    <>
      <Card>
        <Card.Body>
          <Map />
        </Card.Body>
      </Card>
      
      <Card>
        <Card.Body>
          <List />
        </Card.Body>
      </Card>

      {/* <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div> */}
    </>
  )
}