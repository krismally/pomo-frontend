import * as React from 'react'
import { Link as RouterLink, MemoryRouter } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction, Box, createTheme, Link, Paper, ThemeProvider } from '@mui/material';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';

const navTheme = createTheme({
    palette: {
        primary: {
            main: '#FDFDFD',
        },
        text: {
            primary: "#FDFDFD",
            secondary: "#FDFDFD",
        },
        background: {
            default: '#5F876F',
            paper: '#5F876F',
        }
    }
})

const Footer = (props) => {
    const [value, setValue] = React.useState();
    return (
        <ThemeProvider theme={navTheme}>
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, height: '60px' }} elevation={3}>
            <BottomNavigation 
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}    
            >
                <BottomNavigationAction sx={{ p: 3, m: 1 }} value="to-do-list" label="To-Do List" component={RouterLink} to="/lists" icon={<FormatListBulletedIcon />}/>
                <BottomNavigationAction sx={{ p: 3, m: 1 }} value="timer" label="Timer" component={RouterLink} to="/" icon={<AccessAlarmIcon />} />
                <BottomNavigationAction sx={{ p: 3, m: 1 }} value="config" label="Config" component={RouterLink} to="/config" icon={<DisplaySettingsIcon />}  />
            </BottomNavigation>
        </Paper>
        </ThemeProvider>
    )   
}   

export default Footer;