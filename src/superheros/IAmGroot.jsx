import React, { Component } from "react";
import GrootArms from "./components/GrootArms";

export default class IAmGroot extends Component {
  constructor(props) {
    super(props);

    this.state = {

superHeroList: []

    };
  }

componentDidMount() {
    fetch('https://akabab.github.io/superhero-api/api/all.json')
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        this.setState({superHeroList: [...data]})
    })
    .catch(err => console.error(err));
}

  render() {


    return <div>

<h1> Superheros </h1>
{this.state.superHeroList.map((hero) => {
return <GrootArms hero={hero} key={hero.slug}/>
})}
    </div>
    
}
}
