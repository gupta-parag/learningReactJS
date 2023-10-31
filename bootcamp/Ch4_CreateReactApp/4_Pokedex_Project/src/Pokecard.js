import React, { Component } from "react";
import "./Pokecard.css";

class PokeDex extends Component {
  render() {
    return (
      <div className="pokedex">
        <h3 className="pokedex-name">{this.props.name}</h3>
        <img
          src={this.props.src}
          alt={this.props.name}
          className="pokedex-image"
        />
        <h5 className="pokedex-type">Type : {this.props.type}</h5>
        <h5 className="pokedex-exp">EXP : {this.props.exp}</h5>
      </div>
    );
  }
}

export default PokeDex;
