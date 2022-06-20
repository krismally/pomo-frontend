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



const Main = (props) => {
    // State, logic, crud functions...
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
            <Route path="/lists">
                <Lists />
            </Route>
            <Route path="/config">
                <Config />
            </Route>
        </main>
    );
}

export default Main;