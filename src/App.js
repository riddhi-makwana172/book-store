import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthorProfile from "./container/AuthorProfile";
import Dashboard from "./container/Dashboard";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/author-profile" component={AuthorProfile} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
