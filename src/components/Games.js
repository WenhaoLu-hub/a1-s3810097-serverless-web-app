import React, { Component, Fragment } from 'react';
import Game from './Game';


const config = require('../config.json');

export default class Games extends Component {
  constructor(props) {
    super(props);
    this.state = {
        games: [],
        isLoaded: false
    }

}
componentDidMount() {

  fetch(`${config.api.invokeUrl}`)
      .then(res => res.json())
      .then(games => {
          this.setState({
              games: games,
              isLoaded: true, 
          })
      }).catch((err) => {
          console.log(err);
      });

}


  render() {



    const { isLoaded } = this.state;

    if (!isLoaded)
        return <div>Loading...</div>;
  
    return (

        <Fragment>
        <section className="section">
          <div className="container">
            <h1>Game List</h1>
            <p className="subtitle is-5">Enjoy your life</p>
            <br />
            <div className="columns">
              <div className="column">
                <div className="tile is-ancestor">
                  <div className="tile is-4 is-parent  is-vertical">
                    { 
                      this.state.games && this.state.games.length > 0
                      ? this.state.games.map(game => <Game name={game.name} genres={game.genres} description={game.description} key={game.name} />)
                      : <div className="tile notification is-warning">No Game available</div>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  
  }
}
