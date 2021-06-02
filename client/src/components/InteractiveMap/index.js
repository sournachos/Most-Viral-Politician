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
              
              <div className="tools d-flex flex-row justify-content-start align-items-center" >
                <div className="mr-4 ml-2">
                  <button onClick={resetTransform} className="zoom">Reset</button>
                </div>
                <button onClick={zoomOut} className="zoom"><i className="fas fa-search-minus"></i></button>
                <button onClick={zoomIn} className="zoom"><i className="fas fa-search-plus"></i></button>
                
        

              </div>
              <div className="map">
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