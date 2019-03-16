import { element, renderer } from "swiss-element";
import { useState } from "swiss-element/hooks";
import { html, render } from "lit-html";
import "./FullName.js";
import "./style.css";

function App() {
  const [name, setName] = useState("");

  return html`
    <h2>User Page</h2>

    <h3>${name}</h3>

    <p>Change name:</p>
    <full-name @change="${ev => ev.detail && setName(ev.detail)}"> </full-name>
  `;
}

element("my-app", App, renderer(render));
