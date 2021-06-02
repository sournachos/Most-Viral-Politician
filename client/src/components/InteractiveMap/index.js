import React from "react";
import Map from "../Map"
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import "./style.css";

export default function InteractiveMap() {
  return (
    <div className="map-box mb-5 mw-100 rounded">
        <TransformWrapper
          defaultScale={1}
          defaultPositionX={200}
          defaultPositionY={100}
          wheel={{ disabled: true }}
        >
          {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
            <React.Fragment>
              
              <TransformComponent >
                <Map />
              </TransformComponent>

              <div className="tools d-flex justify-content-end my-2 mr-2" >
                <div className="mr-5">
                  <button onClick={zoomOut} className="zoom mr-1"><i className="fas fa-search-minus"></i></button>
                  <button onClick={zoomIn} className="zoom"><i className="fas fa-search-plus"></i></button>
                </div>              
                <button onClick={resetTransform} className="zoom">Reset</button>
              </div>

            </React.Fragment>
          )}
        </TransformWrapper>
      </div>
  )
}