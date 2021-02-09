import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import CharacterList from './components/CharacterList/CharacterList.js';
import CharacterDetails from './components/CharacterDetails/CharacterDetails.js';

const App = () => {

  return (
    <BrowserRouter>
      <div className="container">
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route exact path="/register" component={Register} />
          <Route exact path="/characters" component={CharacterList} />
          <Route exact path="/characters/:id" component={CharacterDetails} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;