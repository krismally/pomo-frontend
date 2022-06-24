import { useContext, useState } from "react";
import Button from "../components/Button";
import { SettingsContext } from "../context/ConfigContext";
import { Box, ButtonGroup, Grid, Paper } from "@mui/material";


// Set config values with sliders, preset starting vals for pomo
const Config = () => {
    const [newTimer, setNewTimer] = useState({
        work: 25,
        short: 5,
        long: 15,
        sessions: 4,
        active: "work"
    })

    const {updateExecute} = useContext(SettingsContext)

    const handleChange = input => {
        const {name, value} = input.target;
        switch (name) {
            case 'work':
                setNewTimer({
                    ...newTimer,
                    work: parseInt(value)
                })
                break;
            case 'shortBreak':
                setNewTimer({
                    ...newTimer,
                    short: parseInt(value)
                })
                break;
            case 'longBreak':
                setNewTimer({
                    ...newTimer,
                    long: parseInt(value)
                })
                break;
            case 'sessionRounds':
                setNewTimer({
                    ...newTimer,
                    sessions: parseInt(value)
                })
                break;
            default:
                break;
        }
    }

    const handleSubmit = e => {
        e.preventDefault();
        updateExecute(newTimer)
    }

    return (
        <Box display="flex"
        justifyContent="center"
        alignItems="center"
        p={15}
        >
        <Paper sx={{ width: '400px', bgcolor: '#5d7683', borderRadius: '15px' }} elevation={5}  >
        <Grid container justifyContent="center" gap={3} p={6}>
            <form noValidate>
                <div className="input-wrapper">
                    <label htmlFor="work">Focus Time: </label>
                    <input type="number" className="input" name="work" onChange={handleChange} value={newTimer.work} /><br />
                    <label htmlFor="shortBreak">Short Break: </label>
                    <input type="number" className="input" name="shortBreak" onChange={handleChange} value={newTimer.short} /><br />
                    <label htmlFor="longBreak">Long Break: </label>
                    <input type="number" className="input" name="longBreak" onChange={handleChange} value={newTimer.long} /><br />
                    <label htmlFor="sessionRounds">Session Rounds: </label>
                    <input type="number" className="input" name="sessionRounds" onChange={handleChange} value={newTimer.sessions} /><br />
                </div>
                <Button title="Set Pomodoro" _callback={handleSubmit} />
            </form>
        </Grid>
        </Paper>
        </Box>
    )
};

export default Config;