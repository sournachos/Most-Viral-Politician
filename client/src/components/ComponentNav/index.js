import React from "react";
import { ListGroup, Card } from "react-bootstrap";
import "./style.css";

export default function ComponentNav({ headings }) {
  return (
    <div className="my-3">
      <Card >
        <Card.Body>
          <span className="me-2 jumpto">Jump to:</span>
          <span>
            <ListGroup horizontal>
              {headings.map(heading => {
                let link = heading.split(" ").join("");
                return <a href={"#"+link} className="text-decoration-none c-nav">
                  <ListGroup.Item>{heading}</ListGroup.Item>
                  </a>
              })}
            </ListGroup>
          </span>

        </Card.Body>
      </Card>
    </div>

)
}