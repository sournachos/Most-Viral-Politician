import React from "react"
import { Button, Card} from "react-bootstrap"
import { List, ListItem } from "../components/List"
//import { Link} from "react-router-dom"

export default function Home() {
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">TEXAS MAP HERE</h2>
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