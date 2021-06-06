import React, { useEffect, useState } from "react"
import ComponentNav from "../components/ComponentNav"
import InteractiveMap from "../components/InteractiveMap";
import { List, ListItem } from "../components/List"
import { Button, Card } from "react-bootstrap"
//import { Link} from "react-router-dom"
import API from "../utils/API";
import DataContext from "../contexts/DataContext";

const red = "#953738";
const tan = "#e3dfb0";
const light = "#F1EACA";
const lightblue = "#0A6281";
const blue = "#0B406F";

export default function Home() {
  const [dataState, setDataState] = useState({});

  useEffect(() => {
    API.getPols()
      .then(res => {
        setDataState(res.data);
      })
      .catch(err => console.log(err));

  }, [dataState])

  return (
    <>

      <ComponentNav 
        headings={["Interactive Map", "List", "Watch List"]}
      />

      <Card>
        <Card.Body>
        <DataContext.Provider value={dataState}>
          <InteractiveMap />
          <List />
        </DataContext.Provider>

        </Card.Body>
      </Card>
    </>
  )
}