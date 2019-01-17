import { element, useState, renderer } from "swiss-element";
import { html, render } from "lighterhtml";
import "./FullName.js";
import "./style.css";

function App() {
  const [name, setName] = useState("");

  return html`
    <h2>User Page</h2>

    <h3>${name}</h3>

    <p>Change name:</p>
    <full-name onchange="${ev => setName(ev.detail)}"> </full-name>
  `;
}

customElements.define("my-app", element(renderer(render))(App));
