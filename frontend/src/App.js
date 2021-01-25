import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import 'antd/dist/antd.css';
import {withRouter} from 'react-router'
import {createBrowserHistory as createHistory} from "history";
import HomePage from "./HomePage";
import SearchPage from "./SearchPage";

const history = createHistory();

function App() {

    return (
        <div className="App">
            <BrowserRouter history={history}>
                <Switch>
                    <Route path="/" exact component={HomePage}/>
                    <Route path="/search" exact component={SearchPage}/>
                </Switch>
            </BrowserRouter>
        </div>

    )
}

App.defaultProps = {
};
export default withRouter(App);
