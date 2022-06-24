import { Box, ButtonGroup, Grid, Paper } from "@mui/material";
import { useContext, useEffect } from "react";
import MainButton from "../components/Button";
import MainTimer from "../components/MainTimer";
import { SettingsContext } from "../context/ConfigContext";
import Config from "./Config";

const Timer = () => {
    // access props with context
    const {
        pomodoro,
        executing,
        setCurrentTimer,
        SettingsBtn,
        children,
        startAnimate,
        startTimer,
        pauseTimer,
        updateExecute
    } = useContext(SettingsContext);
   
    useEffect(() => {updateExecute(executing)}, [executing, startAnimate])
    return (
        <Box display="flex"
        justifyContent="center"
        alignItems="center"
        p={10}
        >
        <Paper sx={{ width: '400px', bgcolor: '#81A6BA' }} elevation={3} >
        <Grid container justifyContent="center" gap={3} p={3}>
            {pomodoro !== 0 ?
                <>
                    <ButtonGroup variant="contained">
                        <MainButton
                            title="Work"
                            activeClass={executing.active === 'work' ? 'active-label' : undefined}
                            _callback={() => setCurrentTimer('work')}
                        />
                        <MainButton
                            title="Short"
                            activeClass={executing.active === 'short' ? 'active-label' : undefined}
                            _callback={() => setCurrentTimer('short')}
                        />
                        <MainButton
                            title="Long"
                            activeClass={executing.active === 'long' ? 'active-label' : undefined}
                            _callback={() => setCurrentTimer('long')}
                        />
                    </ButtonGroup>
                    <div className="time-container">
                        <div className="time-wrapper">
                            <MainTimer
                                key={pomodoro}
                                timer={pomodoro}
                                animate={startAnimate}
                            >
                                {children}
                            </MainTimer>
                        </div>
                    </div>
                    <ButtonGroup variant="contained">
                        <MainButton title="Start" activeClass={startAnimate ? 'active' : undefined} _callback={startTimer} />
                        <MainButton title="Pause" activeClass={!startAnimate ? 'active' : undefined} _callback={pauseTimer} />
                    </ButtonGroup>
                    <div className="instructions-container">
                        <p className="instructions">After each work session, take a short break. After {executing.sessions} work sessions, take a long break.</p>
                    </div>
                </> : <Config />
            }
            </Grid>
        </Paper>
        </Box>
    )
};

export default Timer;