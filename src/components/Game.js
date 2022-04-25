import React, { Component, Fragment }  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class GameAdmin extends Component {

  state = {
    isEditMode: false,
    updatedproductname: this.props.name
  }
  render() {
    return (
      <div className="tile is-child box notification is-success">

         <div>
              <p className="game-name">{ this.props.name }</p>
              <p className="game-genres">genres: { this.props.genres }</p>
              <p className="game-description">description: { this.props.description }</p>
            </div>
        
      </div>
    )
  }
}
