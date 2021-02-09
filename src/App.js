import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Auth from './components/Auth/Auth.js';
import CharacterList from './components/CharacterList/CharacterList.js';
import CharacterDetails from './components/CharacterDetails/CharacterDetails.js';
import Navbar from './components/Navbar/Navbar.js';

const App = () => {

  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Auth}/>
          <Route exact path="/characters" component={CharacterList} />
          <Route exact path="/characters/:id" component={CharacterDetails} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;