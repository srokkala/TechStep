import React from 'react';
import {Route, Router, Switch} from 'react-router-dom';
import './App.css';
import 'antd/dist/antd.css';
import { createBrowserHistory as createHistory } from "history";
import HomePage from "./HomePage";
import SearchPage from "./SearchPage";
const history = createHistory();

function App() {

  return (
      <div className="App">
          <Router history={history}>
              <Switch>
                  <Route path="/" exact component={HomePage}/>
                  <Route path="/search" exact component={SearchPage}/>
              </Switch>
          </Router>
      </div>

  )
}

App.defaultProps = {
};
export default (App);
