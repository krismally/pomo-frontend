import { useEffect, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
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
            <CountdownCircleTimer duration={min * 60}/>
        </div>
    );
}

export default MainTimer;