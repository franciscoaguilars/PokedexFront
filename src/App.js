import 'bootstrap/dist/css/bootstrap.min.css';
import { React, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import NavbarTop from './components/navbar';
import Home from './routes/home';
import ShowPage from './routes/showpage';
import useLocalStorage from './hooks/useLocalStorage';
import Pokedex from './routes/pokedex';

function App() {
  const [ pokedex, setPokedex] = useLocalStorage('pokemons', []);

  return (
    <div className="App">
      <NavbarTop/>
      <Router>
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/pokemon/:id(\d+)">
            <ShowPage pokedex={ pokedex } setPokedex={ setPokedex }/>
          </Route>

          <Route exact path="/pokedex">
            <Pokedex setPokedex = {setPokedex} pokemons = { pokedex }/>
          </Route>

          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </Router>
    </div>

  );
}

export default App;
