import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CharacterList from "./CharacterList";
import CharacterDetails from "./CharacterDetails";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={CharacterList} />
          <Route exact path="/character/:id" component={CharacterDetails} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
