import React from "react";
import { Button, Tooltip, OverlayTrigger } from "react-bootstrap";
import "./style.css";

export default function MapTooltip() {
  return (


      <OverlayTrigger
      placement="right-start"
      overlay={
        <Tooltip id="button-tooltip-2">
          <span className="map-tooltip-text">
            Click the magnifying glass buttons or pinch on a touch screen to zoom in/out. 
            Click the reset button to return to default zoom. 
            Click and drag on the map to pan. 
            Click on a district for more info.
          </span>
        </Tooltip>
      }
    >
      {({ ref, ...triggerHandler }) => (
        <button
          variant="light"
          {...triggerHandler}
          className="map-tooltip-button p-0 w-100"
          ref={ref}
        >
          <i className="fas fa-info-circle display-inline-block"></i>
        </button>
      )}
    </OverlayTrigger>
  )
}