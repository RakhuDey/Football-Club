import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import TeamDetail from "./components/TeamDetail/TeamDetail";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/detail/:idTeam">
          <TeamDetail></TeamDetail>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
