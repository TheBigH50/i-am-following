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
  }
  
  
  render() {

     return (
    <div className='App'>
      <h1>Shopping List</h1>
      <Form />
      <List shoppingList ={this.state.shoppingList}/>
    </div>
  );
}
}

export default App;
