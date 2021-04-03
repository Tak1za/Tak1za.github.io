import "./App.scss";
import Header from "../Header/Header";
import Projects from "../Projects/Projects";
import Profile from "../Profile/Profile";
import { Redirect, Route, Switch } from "react-router";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/me" />
        </Route>
        <Route path="/me" component={Profile} />
        <Route path="/projects" component={Projects} />
      </Switch>
    </div>
  );
}

export default App;
