import React, { Component } from "react";

export default class GrootArms extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p key={this.props.hero.slug}>
          {`${this.props.hero.name} -- Power Level: ${this.props.hero.powerstats.power}`} <br />
          <img
            src={this.props.hero.images.sm}
            alt={`${this.props.hero.name}`}
          />
        </p>
      </div>
    );
  }
}
