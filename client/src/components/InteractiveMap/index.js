import React from "react";
import Map from "../Map";
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
              
              <div className="tools d-flex flex-row justify-content-center align-items-center p-2" >
                <div className="mr-4">
                  <button onClick={resetTransform} className="zoom" id="zoom-reset">Reset</button>
                </div>
                <button onClick={zoomOut} className="zoom" id="zoom-out"><i className="fas fa-search-minus" ></i></button>
                <button onClick={zoomIn} className="zoom" id="zoom-in"><i className="fas fa-search-plus" ></i></button>
                
        

              </div>
              <div className="map" style={{overflow: "auto"}}>
                <TransformComponent>
                  <Map />
                </TransformComponent>
              </div>
                

                
            </React.Fragment>
          )}
        </TransformWrapper>
      </div>
  )
}