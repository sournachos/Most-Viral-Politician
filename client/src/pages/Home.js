import React from "react"
import { Button, Card } from "react-bootstrap"
import { List, ListItem } from "../components/List"
import Map from "../components/Map"
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
//import { Link} from "react-router-dom"

const red = "#953738";
const tan = "#e3dfb0";
const light = "#F1EACA";
const lightblue = "#0A6281";
const blue = "#0B406F";

const styles = {
  map: { width: "fit-content", height: "fit-content", border:"1.5px solid gray", overflow:"auto", backgroundColor: tan}
}

export default function Home() {
  return (
    <>

      <div className="mb-5 mw-100 rounded" style={styles.map}>
        <TransformWrapper
          defaultScale={1}
          defaultPositionX={200}
          defaultPositionY={100}
        >
          {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
            <React.Fragment >

              <TransformComponent >

                <Map />

              </TransformComponent>

              <div className="tools d-flex justify-content-end" >
                <button onClick={zoomIn}>Zoom In</button>
                <button onClick={zoomOut}>Zoom Out</button>
                <button onClick={resetTransform}>Reset</button>
              </div>

            </React.Fragment>
          )}

        </TransformWrapper>
      </div>

      <Card>
        <Card.Body>
          <List />
        </Card.Body>
      </Card>
    </>
  )
}