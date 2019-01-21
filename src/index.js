import { element, useState, renderer } from "swiss-element";
import { html, render } from "lit-html";
import "./FullName.js";
import "./style.css";

const litRenderer = renderer((root, html) => render(html(), root));

function App() {
  const [name, setName] = useState("");

  return html`
    <h2>User Page</h2>

    <h3>${name}</h3>

    <p>Change name:</p>
    <full-name @change="${ev => ev.detail && setName(ev.detail)}"> </full-name>
  `;
}

element("my-app", App, litRenderer);
