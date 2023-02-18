import "./main.scss";
import "./fonts/fonts.scss";

function testComponent(text) {
  const element = document.createElement("h1");
  element.textContent = text;
  return element;
}

document.body.prepend(testComponent("Этот проект собран на Webpack"));
