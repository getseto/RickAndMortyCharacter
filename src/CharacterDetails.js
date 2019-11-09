import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { SEARCH_URL } from "./config";

async function getSingleCharacter(id) {
  const response = await fetch(`${SEARCH_URL}/${id}`);
  const data = await response.json();
  console.log(data);
  return data;
}

const CharacterDetails = () => {
  const [character, setCharacter] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const params = useParams();
  const history = useHistory();

  React.useEffect(() => {
    if (!params.id) {
      return;
    }

    async function getCharacter() {
      setLoading(true);
      const characterData = await getSingleCharacter(params.id);
      setCharacter(characterData);
      setLoading(false);
    }

    getCharacter();
  }, [params.id]);

  if (loading) {
    return "Loading...";
  }

  return (
    <div className="text">
      <br />
      <img src={character.image} alt={character.name} />
      <h3>{character.name}</h3>
      <p>
        <b>Status: </b>
        {character.status}
      </p>
      <p>
        <b>Species: </b>
        {character.species}
      </p>
      <p>
        <b>Origin: </b>
        {character.origin.name}
      </p>
      <br />
      <div
        onClick={() => {
          history.push("/");
        }}
      >
        <a>
          Look, anyone that wants to go back to Earth is free to go back to
          Earth. (Just click here)
        </a>
      </div>
    </div>
  );
};

export default CharacterDetails;
