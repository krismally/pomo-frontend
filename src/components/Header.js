// This will be our logo link that will take us to the about page and our user button
import { Link as RouterLink } from "react-router-dom";
import { Box, createTheme, ThemeProvider } from "@mui/system";
import { AppBar, Link, Avatar, Typography, Toolbar, Grid } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import theme from "../Theme";
import PomoTom from '../assets/PomoTom.png'

const Header = (props) => {
    return (
            <AppBar position="static" >
            <Toolbar>
            <Box 
            component="img"
            alt="PomoTom Logo"
            sx={{ ml: 2 }}
            src={PomoTom}
            position="fixed"
            left={0}
            />
            <Box position={'fixed'} right={0}>
                <Avatar sx={{mr: 2}} component={RouterLink} to="/user">
                    <AccountCircleIcon position="fixed" right={0} color={theme.palette.text.primary}/>
                </Avatar>
            </Box>
            </Toolbar>
            </AppBar>
    )
}

export default Header;