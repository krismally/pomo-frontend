import { useContext } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { SettingsContext } from "../context/ConfigContext";

// Set timer progress bar and controls
const MainTimer = (props) => {
    // destructuring
    const { key, timer, animate, children } = props;

    // use context for stopTimer()
    const { stopTimer } = useContext(SettingsContext);
    return (
            <CountdownCircleTimer
                key={key}
                isPlaying={animate}
                duration={timer * 60}
                colors={["#F0766E"]}
                strokeWidth={6}
                size={300}
                trailColor="#2e383f"
                onComplete={ () => {
                    stopTimer();
                }}
            >
                {children}
            </CountdownCircleTimer>
    );
}

export default MainTimer;