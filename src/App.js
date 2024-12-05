import './App.css';

import React, { Component } from 'react';
import Nav from './Component/Nav';
import Footer from './Component/Footer';
import Header from './Component/Header';

class App extends Component {
  state = {
    data: [
      { id: 1, name: 'John', age: 25 },
      { id: 2, name: 'Alice', age: 30 },
      { id: 3, name: 'Bob', age: 28 },
    ],
    newAge: '',
    newName: '',
    nextId: 4,
  };

  // Handle delete
  handleDelete = (id) => {
    this.setState({
      data: this.state.data.filter(item => item.id !== id),
    });
  };

  // Handle input changes for new name
  handleName = (e) => {
    this.setState({
      newName: e.target.value,
    });
  };

  // Handle input changes for new age
  handleAge = (e) => {
    this.setState({
      newAge: parseInt(e.target.value) || '', // Ensure age is a number or empty
    });
  };

  // Handle form submission to add a new item
  handleAdd = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    const { newName, newAge, data } = this.state;

    // Validation to ensure both name and age are provided
    if (newName.trim() === '' || !newAge) {
      alert('Please provide both a name and a valid age.');
      return;
    }

    // Add new item to the data array
    this.setState((prevState) => ({
      data: [...data, { id: this.state.nextId, name: newName, age: newAge }],
      nextId: prevState.nextId + 1,
      newName: '', // Clear the name input
      newAge: '', // Clear the age input
    }));
  
  }

  render() {
    return (

      <div className="App container text-center">
        <Header />
      
        <Nav  data={this.state.data} handleDeleteData={this.handleDelete} 
          handleAdd={this.handleAdd} 
          handleAge={this.handleAge}
          handleName={this.handleName}  // Passing down the handlers to the Nav component for use in the form.
          newName={this.state.newName}
          newAge={this.state.newAge}  // Passing down the newAge and newName state to the Nav component for use in the form.

        />

        <Footer />
      </div>
    );
  }
}

export default App;
