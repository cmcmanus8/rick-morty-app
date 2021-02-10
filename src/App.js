import React from 'react';
import { Redirect, Route, Switch, BrowserRouter } from 'react-router-dom';
import Auth from './components/Auth/Auth.js';
import CharacterList from './components/CharacterList/CharacterList.js';
import CharacterDetails from './components/CharacterDetails/CharacterDetails.js';
import Navbar from './components/Navbar/Navbar.js';
import NotFound from './components/NotFound/NotFound.js';

const App = () => {

  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Auth}/>
          <Route exact path="/characters" component={CharacterList} />
          <Route exact path="/characters/:id" component={CharacterDetails} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;