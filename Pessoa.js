import React from 'react';

class Pessoa extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: null,
      lastname:'',
    };
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    let age = this.state.age;
    let name = this.state.name;
    let lastname = this.state.lastname;

    if (!Number(age)) {
      alert("Your age must be a number");
    }

    if (!name) {
      alert("Your age must be a number " + name);
    }
   
 
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }
  render() {
    return (
      <form onSubmit={this.mySubmitHandler}>
      <h1>Name</h1>
      <p>Enter your name:</p>
      <input
        type='text'
        name='username'
        onChange={this.myChangeHandler}
      />
      <p>Enter your Lastname:</p>
      <input
        type='text'
        name='lastname'
        onChange={this.myChangeHandler}
      />
      <p>Enter your age:</p>
      <input
        type='text'
        name='age'
        onChange={this.myChangeHandler}
      />
      <br/>
      <br/>
      <input type='submit' />
      </form>
    );
  }
}
export default Pessoa;