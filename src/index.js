import _ from "lodash";
import "./style.css";
import printMe from "./print.js";

import createButton from "./components/button/button";

function component() {
  const element = document.createElement("div");

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");

  const btn = document.createElement("button");

  btn.innerHTML = "Click me and check !!! the console!";
  btn.onclick = printMe;

  element.appendChild(btn);
  createButton(element);

  return element;
}

document.body.appendChild(component());
