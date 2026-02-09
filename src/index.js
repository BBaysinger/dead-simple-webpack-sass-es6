import { AlertBox } from "./alert-box/alert-box";
import writeText from "./write-text/write-text";

import "./style.scss";

// Tiny demo: one imported class + one imported function.
const alertUser = new AlertBox();

document.addEventListener("DOMContentLoaded", () => {
  const alertButton = document.getElementById("js-button");
  const writeTextButton = document.getElementById("js-write-text-button");
  const output =
    document.getElementById("output") || document.querySelector("p");

  if (alertButton) {
    alertButton.addEventListener("click", () => alertUser.sayHi());
  }

  if (writeTextButton && output) {
    writeTextButton.addEventListener("click", () => writeText(output));
  }
});
