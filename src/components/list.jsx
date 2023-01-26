import React, { Component } from "react";

export default class List extends Component {

    constructor(props) {
        super(props);
    }

    render() {

    //const shoppingList = ["oranges", "bananas", "brussel sprouts", "toast"];

    return (
      <div>
        <ul>
          {this.props.shoppingList.map((item, index) => {
            
            return <li key={`${item}${index}`}>{item}</li>;
          })
          }                  
        </ul>
      </div>
    );
  }
}
