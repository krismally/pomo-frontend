// This will be our logo link that will take us to the about page and our user button
import { Link as RouterLink } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/system";
import { AppBar, Link, Avatar, Typography, Toolbar } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import theme from "../Theme";

const Header = (props) => {
    return (
            <AppBar position="static">
            <Toolbar>
                <Typography sx={{ flexGrow: 1 }} >PomoTom</Typography>
                <Avatar component={RouterLink} to="/user">
                    <AccountCircleIcon color={theme.palette.text.primary}/>
                </Avatar>
            </Toolbar>
            </AppBar>
    )
}

export default Header;