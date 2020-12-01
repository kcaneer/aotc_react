import React, {useState} from "react";
import "bootstrap";
import "./theme.css";
import "./App.css";
import Want from "./components/Want";
import Listened from "./components/Listened";
import Public from "./components/Public";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppProvider } from "./Utilities/AppContext";
function App() {
  const [bearer, setBearer] = useState("");
  const [name, setName] = useState("");
  let initialContext = {bearer, setBearer, name, setName};
  return (
    <AppProvider value={initialContext}>
      <div className="App container text-primary bg-secondary pb-4">
        <Router>
          <Switch>
            <Route exact path={"/"} component={Public} />
            <Route exact path={"/dashboard"} component={Dashboard} />
            <Route exact path={"/dashboard/want"} component={Want} />
            <Route exact path={"/dashboard/listened"} component={Listened} />
            <Route exact path={"/dashboard/logout"} component={Public}/>
          </Switch>
        </Router>
      </div>
    </AppProvider>
  );
}

export default App;
