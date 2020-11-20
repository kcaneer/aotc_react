import React from 'react'
import 'bootstrap'
import './theme.css'
import "./App.css";
import Want from './components/Want'
import Listened from './components/Listened'
import Public from './components/Public'
import Auth from './components/Auth'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App container text-primary bg-secondary pb-4">
      <Router>
        <Switch>
        <Route exact path={"/"} component={Public} />
        <Route exact path={"/auth"} component={Auth} />
        <Route exact path={"/auth/want"} component={Want} />
        <Route exact path={"/auth/listened"} component={Listened} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
