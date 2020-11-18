import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black"
};
//inlinestyling is useful to update on the fly as follows
//customStyle.color = "blue";
/*commenting multi line */

//if inside html {/**/}
ReactDOM.render(
  <h1 style={customStyle}>Hello World!</h1>,
  document.getElementById("root")
);
