import React from "react";
import { useHistory } from "react-router-dom";
import { SEARCH_URL } from "./config";
import Character from "./Character";

async function getCharacters(charName) {
  const response = await fetch(`${SEARCH_URL}?name=${charName}`);
  const data = await response.json();
  return data;
}

function CharacterList(props) {
  const [search, setSearch] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [characters, setCharacters] = React.useState([]);
  const history = useHistory();

  React.useEffect(() => {
    async function searchCharacters() {
      if (!loading) {
        setLoading(true);
        const characterData = await getCharacters(search);
        setCharacters(characterData.results);
        setLoading(false);
      }
    }

    searchCharacters();
  }, [search]);

  return (
    <div className="App text simple-form">
      <h2>Welcome to the darkest year of our adventures.</h2>
      <input
        placeholder="Search here!"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      {loading ? (
        <div>
          <br />
          Loading...
        </div>
      ) : characters ? (
        <div className="char-list">
          {characters.map(character => {
            return (
              <Character
                onClick={() => {
                  history.push(`character/${character.id}`);
                }}
                key={character.id}
                character={character}
              />
            );
          })}
        </div>
      ) : (
        <div>
          <br />
          No results :(
        </div>
      )}
    </div>
  );
}

export default CharacterList;
