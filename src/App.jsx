import React from "react";
import anime from "animejs";
import "./App.scss";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.text = null;
  }

  componentDidMount() {
    const dist = 100;
    this.text = anime({
      targets: ".the-text",
      opacity: 1,
      delay: 1000,
      direction: "alternative",
      loop: true
    });
  }

  render() {
    const text = "hello world";
    return (
      <div className="container">
        <p className="the-old-text">{text}</p>
        <p className="the-text">{text}</p>
        <div className="buttons">
          <button onClick={() => this.text.play()}>play</button>
          <button onClick={() => this.text.pause()}>pause</button>
        </div>
      </div>
    );
  }
}
