import { useContext, useEffect } from "react";
import Button from "../components/Button";
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
        <div className="pomo-container">
            {pomodoro !== 0 ?
                <>
                    <ul className="labels">
                        <li>
                            <Button
                                title="Work"
                                activeClass={executing.active === 'work' ? 'active-label' : undefined}
                                _callback={() => setCurrentTimer('work')}
                            />
                        </li>
                        <li>
                        <Button
                            title="Short Break"
                            activeClass={executing.active === 'short' ? 'active-label' : undefined}
                            _callback={() => setCurrentTimer('short')}
                        />
                        </li>
                        <li>
                            <Button
                                title="Long Break"
                                activeClass={executing.active === 'long' ? 'active-label' : undefined}
                                _callback={() => setCurrentTimer('long')}
                            />
                        </li>
                    </ul>
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
                    <div className="button-wrapper">
                        <Button title="Start" activeClass={startAnimate ? 'active' : undefined} _callback={startTimer} />
                        <Button title="Pause" activeClass={!startAnimate ? 'active' : undefined} _callback={pauseTimer} />
                    </div>
                    <div className="instructions-container">
                        <p className="instructions">After each work session, take a short break. After {executing.sessions} work sessions, take a long break.</p>
                    </div>
                </> : <Config />
            }
        </div>
    )
};

export default Timer;