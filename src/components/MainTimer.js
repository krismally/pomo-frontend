import { useEffect, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import Config from "../pages/Config";

// Set timer progress bar and controls
const MainTimer = ({key, timer, animate, children}) => {
    return (
        <div className="Timer">
            <h4>Session 4/5</h4> 
            <CountdownCircleTimer
                key={key}
                isPlaying={animate}
                duration={timer * 60}
                colors={["#F0766E"]}
                strokeWidth={6}
                size={300}
                trailColor="#2e383f"
                onComplete={ () => {
                    // stopTimer()
                }}
            >
                {children}
            </CountdownCircleTimer>
        </div>
    );
}

export default MainTimer;