import React from "react";
import Map from "../Map";
import "./style.css";
import MapTooltip from "../MapTooltip";

 

export default function InteractiveMap() {
 
  return (
    <div className="map-box mb-5 w-100 rounded" id="InteractiveMap">

      <React.Fragment>
       
          <div id='map' className="map">
          <Map />
          </div>

      </React.Fragment>


    </div>
  )
}