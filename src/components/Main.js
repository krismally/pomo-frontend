// Component Libraries
import { Box, Container } from '@mui/material';
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
        <Container color="background">
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
        </Container>
    );
}

export default Main;