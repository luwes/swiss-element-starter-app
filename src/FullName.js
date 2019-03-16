import { element, renderer } from "swiss-element";
import { useState } from "swiss-element/hooks";
import { html, render } from "lit-html";

function dispatch(el, first, last) {
  let event = new CustomEvent("change", {
    detail: first + " " + last
  });

  el.dispatchEvent(event);
}

function FullName(el) {
  const [first, setFirst] = useState("Swiss");
  const [last, setLast] = useState("Cheese 🧀");

  dispatch(el, first, last);

  return html`
    <div class="container">
      <label for="first">First</label>
      <input
        value="${first}"
        @keyup="${ev => setFirst(ev.target.value)}"
        type="text"
        name="first"
      />

      <label for="last">Last</label>
      <input
        value="${last}"
        @keyup="${ev => setLast(ev.target.value)}"
        type="text"
        name="last"
      />
    </div>

    <style>
      .container {
        border: none;
        display: grid;
        grid-template-columns: 20% 80%;
      }

      input {
        border: 1px solid #e5e5e5;
        padding: 6px 10px;
        margin-bottom: 1em;
      }
    </style>
  `;
}

element("full-name", FullName, renderer(render));
