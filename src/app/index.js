import React, { Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import GameList from "root/scenes/GameList/GameList";
import Navigation from "./components/Navbar/Navigation";
import './app.scss';
import Race from "root/scenes/Race/Race";
import Header from "./components/Header/Header";


const App = () => {
    return (
        <Fragment>
            <Navigation />
            <Header />
            <Switch>
                <Route path="/" exact component={Race} />
                <Route path="/gamelist" exact component={GameList} />
                <Redirect to="/" />
            </Switch>
        </Fragment>
    );
}


export default App;
