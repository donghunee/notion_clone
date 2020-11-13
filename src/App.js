import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainHeaderComponent from "./components/header/MainHeaderComponent";
import Member from "./pages/member/Member";
const App = () => {
  return (
    <Router>
      <div className="App">
        <Route component={MainHeaderComponent} />
        <Switch>
          <Route path="/" exact></Route>
          <Route path="/members" component={Member} />
          <Route path="/*">404 not Found</Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
