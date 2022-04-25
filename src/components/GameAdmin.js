import React, { Component } from 'react';
import FormErrors from "./FormErrors";
import axios from "axios";
const config = require('../config.json');

export default class GameAdmin extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      genres: '',
      description: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(event) {
    const inputValue = event.target.value;
    const stateField = event.target.name;
    this.setState({
      [stateField]: inputValue,
    });
    console.log(this.state);
  }

  async handleSubmit(event) {
    event.preventDefault();
    const { name, genres, description } = this.state;
    await axios.post(
      `${config.api.invokeUrl}`,
      { key1: `${name}`, key2:`${genres}`,key3:`${description}` }
    );
    alert("successfylly " + JSON.stringify(name));
  }

  onInputChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
    document.getElementById(event.target.id).classList.remove("is-danger");
  }


  render() {
    return (
      <section className="section auth">
        <div className="container">
          <h1>New Game</h1>
          <FormErrors formerrors={this.state.errors} />

          <form onSubmit={this.handleSubmit}>
            <div className="field">
              <p className="control">
                <input 
                  className="input" 
                  type="text"
                  id="name"
                  // aria-describedby="userNameHelp"
                  placeholder="Enter name"
                  value={this.state.name}
                  onChange={this.onInputChange}
                />
              </p>
            </div>
            <div className="field">
              
                <input 
                  className="input" 
                  type="text"
                  id="genres"
                  // aria-describedby="emailHelp"
                  placeholder="Enter genres"
                  value={this.state.genres}
                  onChange={this.onInputChange}
                />
                
              
            </div>
            <div className="field">
              
                <input 
                  className="input" 
                  type="text"
                  id="description"
                  placeholder="description"
                  value={this.state.description}
                  onChange={this.onInputChange}
                />
                
                
              
            </div>

            
            <div className="field">
              <p className="control">
                <button className="button is-success">
                  Add a new Game
                </button>
              </p>
            </div>
          </form>
        </div>
      </section>



    );
    
  }
}
