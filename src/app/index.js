import React, { Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import GameList from "../scenes/GameList";
import Navigation from "./Navigation";
import './app.scss';


const App = () => {
    return (
        <Fragment>
            <Navigation />
            <Switch>
                <Route path="/" exact component={GameList} />
                <Redirect to="/" />
            </Switch>
        </Fragment>
    );
}


export default App;