import React from "react";

function Character(props) {
  return (
    <div className="text">
      <br />
      <img
        onClick={props.onClick}
        className="character"
        src={props.character.image}
        alt="wow"
      />
      <h3>{props.character.name}</h3>
      <p>
        <b>Status: </b>
        {props.character.status}
      </p>
      <p>
        <b>Species: </b>
        {props.character.species}
      </p>
      <p>
        <b>Origin: </b>
        {props.character.origin.name}
      </p>
    </div>
  );
}

export default Character;
