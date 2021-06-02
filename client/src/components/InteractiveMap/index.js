import React from "react";
import Map from "../Map";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import "./style.css";

export default function InteractiveMap() {
  return (
    <div className="map-box mb-5 mw-100 rounded">
        <TransformWrapper
          defaultScale={0.98}
          defaultPositionX={200}
          defaultPositionY={100}
          wheel={{ disabled: true }}
          options={{ minScale: 0.50 }}
        >
          {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
            <React.Fragment>
              
              <div className="tools d-flex flex-row justify-content-between align-items-center p-2" >
                <div class="map-head display-inline">
                  <h5 className="mr-5 my-0 display-inline">
                    U.S. Congressional Districts – Texas<span className="ml-3"><i className="fas fa-info-circle display-inline-block"></i></span>
                  </h5>
                  
                    
                  
                  
                </div>

                <div>
              
                  <button onClick={zoomOut} className="zoom" id="zoom-out"><i className="fas fa-search-minus" ></i></button>
                  <button onClick={zoomIn} className="zoom" id="zoom-in"><i className="fas fa-search-plus" ></i></button>
                  <button onClick={resetTransform} className="zoom ml-5" id="zoom-reset">Reset</button>
                </div>
                
                
        

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