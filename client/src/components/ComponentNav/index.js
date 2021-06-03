import React from "react";
import { ListGroup } from "react-bootstrap";
import "./style.css";

export default function ComponentNav({ headings }) {
  return (
//     <div class="container">
//       <div class="row">
//         {headings.map(heading => {
//           let link = heading.split(" ").join("");
//           return <a href={"#"+link}>{heading}</a>
//         })
// }
//       </div>
//     </div>
  <ListGroup horizontal className="my-2">
    {headings.map(heading => {
      let link = heading.split(" ").join("");
      return <a href={"#"+link} className="text-decoration-none">
        <ListGroup.Item>{heading}</ListGroup.Item>
        </a>
    })}
  </ListGroup>
)
}