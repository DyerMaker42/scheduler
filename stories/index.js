import React from "react";
import ReactDOM from "react-dom";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import "index.scss";
import "./styles.css";
import Button from "components/Button";
import tweets from "./tweets.json"

const tweet = tweets[0];

function Tweet(props) {
  <article className="tweet">
  <header className="tweet__header">
    <img
      className="tweet__header-avatar"
      src=""
      alt="User Avatar"
    />
    <h2 className="tweet__header-name"></h2>
  </header>
  <main className="tweet__content">
    <p></p>
  </main>
  <footer className="tweet__footer"></footer>
</article>
}

storiesOf("Button", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  })
  .add("Base", () => <Button>Base</Button>)
  .add("Confirm", () => <Button confirm>Confirm</Button>)
  .add("Danger", () => <Button danger>Cancel</Button>)
  .add("Clickable", () => (
    <Button onClick={action("button-clicked")}>Clickable</Button>
  ))
  .add("Disabled", () => (
    <Button disabled onClick={action("button-clicked")}>
      Disabled
    </Button>
  ));
