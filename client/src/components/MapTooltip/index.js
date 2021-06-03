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
        <Button
          variant="light"
          {...triggerHandler}
          className="d-inline-flex align-items-center py-1 px-2 map-tooltip-button"
          ref={ref}
        >
          <i className="fas fa-info-circle display-inline-block"></i>
        </Button>
      )}
    </OverlayTrigger>
  )
}