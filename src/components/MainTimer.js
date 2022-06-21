import { useState } from "react";
import ProgressBar from "react-customizable-progressbar"

import Config from "../pages/Config";

// Set timer progress bar and controls
const MainTimer = (props) => {
    const [min, setMin] = useState(25);
    const [sec, setSec] = useState(0);
    const [amount, setAmount] = useState(min);
    const [start, setStart] = useState(false);
    const [progress, setProgress] = useState(1);
    const [shortBreak, setShortBreak] = useState(5);
    const [longBreak, setLongBreak] = useState(15);

    return (
        <div className="Timer">
            <h4>Session 4/5</h4>
            <ProgressBar 
                progress={100}
                radius={100}
                counterClockwise
            >
                <div className="indicator">
                    <h1>25:00</h1>
                    <div className="controls">
                        <button className="play">Play</button> 
                        <button className="pause">Pause</button> 
                        <button className="sound">Mute/Unmute</button>
                    </div>
                </div>
            </ProgressBar>
        </div>
    );
}

export default MainTimer;