import React, { Component, Fragment } from 'react';
import FormErrors from "./FormErrors";
import Validate from "./utility/FormValidation";
// import Product from './Product';
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

  // state = {
  //   newgame: { 
  //     "name": "web-test-name",
  //     "genres": "web-test-genres",
  //     "description": "webtest-description"
  //   },
  //   games: []
  // }
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
  // handleAddProduct = async (event) => {
  //   event.preventDefault();
  //   // add call to AWS API Gateway add product endpoint here
  //   try {
  //     const params = {

  //         "name" : "web-test-name",
  //         "genres" : "web-test-genres",
  //         "description" : "webtest-description"   

  //     };
  //     alert(JSON.stringify(params));
  //     await axios.post(`https://jmulu03w55.execute-api.us-east-1.amazonaws.com/dev`, params);
  //     this.setState({ games: [...this.state.games, this.state.newgame] });
  //     this.setState({ newgame: { "name": "", "genres": "" ,"description":""}});
  //   }catch (err) {
  //     console.log(`An error has occurred: ${err}`);
  //   }
  // }

  // handleUpdateProduct = async (name, genres, description) => {
  //   // add call to AWS API Gateway update product endpoint here
  //   try {
  //     const params = {
  //       "name": name,
  //       "genres": genres,
  //       "description": description
  //     };
  //     await axios.patch(`${config.api.invokeUrl}/game/${name}`, params);
  //     const gameToUpdate = [...this.state.names].find(game => game.name === name);
  //     const updatedGames = [...this.state.games].filter(game => game.name !== name);
  //     gameToUpdate.productname = name;
  //     updatedGames.push(gameToUpdate);
  //     this.setState({products: updatedGames});
  //   }catch (err) {
  //     console.log(`Error updating product: ${err}`);
  //   }
  // }


  // fetchProducts = async () => {
  //   // add call to AWS API Gateway to fetch products here
  //   // then set them in state
  //   try {
  //     const res = await axios.get(`${config.api.invokeUrl}/game`);
  //     const games = res.data;
  //     this.setState({ games: games });
  //   } catch (err) {
  //     console.log(`An error has occurred: ${err}`);
  //   }
  // }

  // onAddGameNameChange = event => this.setState({ newgame: { ...this.state.newgame, "name": event.target.value } });
  // onAddGameGenresChange = event => this.setState({ newgame: { ...this.state.newgame, "genres": event.target.value } });
  // onAddGameDescChange = event => this.setState({ newgame: { ...this.state.newgame, "description": event.target.value } });

  // componentDidMount = () => {
  //   this.fetchProducts();
  // }

  render() {
    return (
      // <Fragment>
      //   <section className="section">
      //     <div className="container">
      //       <h1>Product Admin</h1>
      //       <p className="subtitle is-5">Add new game using the form below:</p>
      //       <br />
      //       <div className="columns">
      //         <div className="column is-one-third">
      //           <form onSubmit={this.handleSubmit}>
      //             <div className="field has-addons">
      //               <div className="control">
      //                 <input 
      //                   className="input is-medium"
      //                   type="text" 
      //                   placeholder="Enter name"
      //                   onChange={this.onAddGameNameChange}
      //                   value={this.state.name}
      //                 />
      //               </div>
      //               <div className="control">
      //                 <input 
      //                   className="input is-medium"
      //                   type="text" 
      //                   placeholder="Enter genres"
      //                   onChange={this.onAddGameGenresChange}
      //                   value={this.state.genres}
      //                 />
      //               </div>
      //               <div className="control">
      //                 <input 
      //                   className="input is-medium"
      //                   type="text" 
      //                   placeholder="Enter description"
      //                   onChange={this.onAddGameDescChange}
      //                   value={this.state.description}
      //                 />
      //               </div>
      //               <div className="control">
      //                 <button type="submit" className="button is-primary is-medium">
      //                   Add product
      //                 </button>
      //               </div>
      //             </div>
      //           </form>
      //         </div>
  
      //       </div>
      //     </div>
      //   </section>
      // </Fragment>
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

      // <div>
      //   <form onSubmit={this.handleSubmit}>
      //     <div>
      //     <label>Name:</label>
      //     <input
      //       type="text"
      //       name="name"
      //       onChange={this.handleChange}
      //       value={this.state.name}
      //     />
      //     </div>
      //     <div>
      //     <label>genres:</label>
      //     <input
      //       type="text"
      //       name="genres"
      //       onChange={this.handleChange}
      //       value={this.state.genres}
      //     />
      //     </div>
      //     <div>
      //     <label>description:</label>
      //     <input
      //       type="text"
      //       name="description"
      //       onChange={this.handleChange}
      //       value={this.state.description}
      //     />
      //     </div>
          
      //   <div><button type="submit">Send</button></div>
          

          

          
      //    </form>
      //  </div>
    );
    
  }
}
