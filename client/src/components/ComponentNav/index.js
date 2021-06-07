import React from "react";
import { ListGroup, Card } from "react-bootstrap";
import "./style.css";

export default function ComponentNav({ headings }) {
  return (
    <div className="my-3 c-nav-parent container-fluid">
      <Card className="row">
        <Card.Body className="d-inline-block">
          <span className="me-2 jumpto col-sm-3">Jump to:</span>
          <ListGroup horizontal={'sm'} className="nav-list">
            {headings.map(heading => {
              let link = heading.split(" ").join("");
              return <a href={"#"+link} className="text-decoration-none c-nav">
                <ListGroup.Item>{heading}</ListGroup.Item>
                </a>
            })}
          </ListGroup>

        </Card.Body>
      </Card>
    </div>

)
}