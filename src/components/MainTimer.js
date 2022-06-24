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
                colors={["#AB514B"]}
                strokeWidth={8}
                size={300}
                trailColor="#516772"
                onComplete={ () => {
                    stopTimer();
                }}
            >
                {children}
            </CountdownCircleTimer>
    );
}

export default MainTimer;