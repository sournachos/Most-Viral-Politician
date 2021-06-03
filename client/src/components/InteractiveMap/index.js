import React from "react";
import Map from "../Map";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import "./style.css";
import MapTooltip from "../MapTooltip";



export default function InteractiveMap() {
  return (
    <div className="map-box mb-5 mw-100 rounded" id="InteractiveMap">
      <TransformWrapper
        defaultScale={0.98}
        defaultPositionX={200}
        defaultPositionY={100}
        limitToBounds={false}
        wheel={{ disabled: true }}
        options={{ minScale: 0.50 }}
      >
        {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
          <React.Fragment>
            <div className="container-fluid">
              <div className="tools row d-flex flex-row justify-content-between align-items-center p-2" >
                <div class="map-head display-inline col-sm-6 d-flex justify-content-between p-0 pb-1 pb-sm-0">
                  <h5 className="my-0 display-inline">
                    <span className="">U.S. Congressional Districts – TX</span>
                    
                  </h5>
                </div>
                
                <div className="col-sm-6 pe-2">
                  <div className="row justify-content-center">
                    <div className="col-2 p-0">
                      <MapTooltip/>
                    </div>
                    
                    <div className="col-6 p-0">
                      <button onClick={zoomOut} className="zoom w-50 h-100 p-0" id="zoom-out"><i className="fas fa-search-minus" ></i></button>
                      <button onClick={zoomIn} className="zoom w-50 h-100 p-0" id="zoom-in"><i className="fas fa-search-plus" ></i></button>
                    </div>



                    <button onClick={resetTransform} className="zoom col-4 p-0" id="zoom-reset">Reset</button>
                  </div>

                </div>




              </div>
              <div className="map" style={{ overflow: "auto" }}>
                <TransformComponent>
                  <Map />
                </TransformComponent>
              </div>


            </div>
          </React.Fragment>
        )}
      </TransformWrapper>
    </div>
  )
}