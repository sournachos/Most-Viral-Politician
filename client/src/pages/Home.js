import React from "react"
import { Button, Card} from "react-bootstrap"
import { List, ListItem } from "../components/List"
import Map from "../components/Map"
//import { Link} from "react-router-dom"

const red = "#953738";
const tan = "#e3dfb0";
const light = "#F1EACA";
const lightblue = "#0A6281";
const blue = "#0B406F";

const styles = {
  map: {
    backgroundColor: tan
  }
}

export default function Home() {
  return (
    <>
      <Card  style={styles.map}>
        <Card.Body>
          <Map/>
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