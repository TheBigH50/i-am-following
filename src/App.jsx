//import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Form from './components/form';
import List from './components/list';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      shoppingList: ["oranges", "bananas", "brussels sprouts", "toast"],
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(event, newListItem) {
    event.preventDefault();
    this.setState({
      shoppingList: [...this.state.shoppingList, newListItem]
    })
  }
  
  render() {

     return (
    <div className='App'>
      <h1>Shopping List</h1>
      <Form handleSubmit ={this.handleSubmit}/>
      <List shoppingList ={this.state.shoppingList}/>
    </div>
  );
}
}

export default App;
