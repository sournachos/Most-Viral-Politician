import React from "react";
import "./style.css";

export default function ComponentNav({ headings }) {
  return (
    <div class="container">
      <div class="row">
        {headings.map(heading => {
          let link = heading.split(" ").join("");
          return <a href={"#"+link}>{heading}</a>
        })
}
      </div>
    </div>
  )
}