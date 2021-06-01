import React from "react"
import { Button, Card } from "react-bootstrap"
import { List, ListItem } from "../components/List"
import Map from "../components/Map"
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
//import { Link} from "react-router-dom"

export default function Home() {
  return (
    <>

      <div className="mb-5 mw-100 rounded" style={{ width: "fit-content", height: "fit-content", border:"1.5px solid gray"}}>
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