import ProgressBar from "react-customizable-progressbar"

// Set timer progress bar and controls
const MainTimer = (props) => {
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