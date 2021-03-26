import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavbarTop from './components/navbar';
import Home from './components/home';
import ShowPage from './components/showpage';

function App() {
  return (
    <div className="App">
      <NavbarTop/>
      <Router>
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/pokemon/:id">
            <ShowPage />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
