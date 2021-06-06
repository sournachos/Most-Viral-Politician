import React from "react";
import Map from "../Map";
import "./style.css";
import MapTooltip from "../MapTooltip";

 

export default function InteractiveMap() {
 
  return (
    <div className="map-box mb-5 w-100 rounded" id="InteractiveMap">

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
                  <MapTooltip />
                </div>

                <div className="col-6 p-0">
                  <button className="zoom w-50 h-100 p-0" id="zoom-out"><i className="fas fa-search-minus" ></i></button>
                  <button className="zoom w-50 h-100 p-0" id="zoom-in"><i className="fas fa-search-plus" ></i></button>
                </div>
                <button className="zoom col-4 p-0" id="zoom-reset">Reset</button>
              </div>
            </div>
          </div>

          <div id='map' className="map">
            <Map />

          </div>


        </div>
      </React.Fragment>


    </div>
  )
}