import React from "react"
import InteractiveMap from "../components/InteractiveMap";
import { List, ListItem } from "../components/List"
import { Button, Card } from "react-bootstrap"
//import { Link} from "react-router-dom"

const red = "#953738";
const tan = "#e3dfb0";
const light = "#F1EACA";
const lightblue = "#0A6281";
const blue = "#0B406F";

export default function Home() {
  return (
    <>
      <Card>
        <Card.Body>
        <InteractiveMap />
          <List />
        </Card.Body>
      </Card>
    </>
  )
}