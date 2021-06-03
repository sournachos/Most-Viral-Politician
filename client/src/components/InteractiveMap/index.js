import React from "react";
import Map from "../Map";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import "./style.css";
import MapTooltip from "../MapTooltip";



export default function InteractiveMap() {
  return (
    <div className="map-box mb-5 mw-100 rounded">
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
                <div class="map-head display-inline col-md-6 col-sm-7 col-8 d-flex justify-content-between">
                  <h5 className="my-0 display-inline me-3">
                    <span className="me-3">U.S. Congressional Districts – Texas</span>
                    <MapTooltip />
                  </h5>
                </div>

                <div className="col-md-6 col-sm-5 col-4">
                  <div className="row justify-content-end">
                    <button onClick={zoomOut} className="zoom col-md-2 col-sm-3 col-3 p-0" id="zoom-out"><i className="fas fa-search-minus" ></i></button>
                    <button onClick={zoomIn} className="zoom col-md-2 col-sm-3 col-3 p-0" id="zoom-in"><i className="fas fa-search-plus" ></i></button>


                    <button onClick={resetTransform} className="zoom col-md-3 col-sm-5 col-5 p-0" id="zoom-reset">Reset</button>
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