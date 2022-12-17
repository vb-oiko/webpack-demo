import "./button.css";
import Button from "./button.jpeg";

const createButton = (parent) => {
  const button = document.createElement("button");
  button.innerText = "Button";
  button.classList.add("button");

  button.addEventListener("click", () => {
    console.warn("Click!");
  });

  //   const myIcon = new Image();
  //   myIcon.src = Button;

  //   button.appendChild(myIcon);

  parent.appendChild(button);
};

export default createButton;
