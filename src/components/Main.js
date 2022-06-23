// React Core Functionality
import { useState, useEffect} from 'react';

// Component Libraries
import { Route } from 'react-router-dom';

// Page Components
import About from '../pages/About';
import Config from '../pages/Config';
import Lists from '../pages/Lists';
import Timer from '../pages/Timer';
import User from '../pages/User';
import ListDone from './ListDone';




const Main = (props) => {

    return (
        <main>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/user">
                <User />
            </Route>
            <Route exact path="/">
                <Timer />
            </Route>
            <Route exact path="/lists">
                <Lists />
            </Route>
            <Route exact path="/lists/done">
                <ListDone />
            </Route>
            <Route path="/config">
                <Config />
            </Route>
        </main>
    );
}

export default Main;