import ProgressBar from "react-customizable-progressbar"

const MainTimer = (props) => {
    return (
        <div className="Timer">
            <ProgressBar 
                progress={100}
                radius={100}
                counterClockwise
            >
                <div className="indicator">
                    <h1>25:00</h1>
                    <h4>Session 4/5</h4>
                    <button className="sound">Mute/Unmute</button>
                    <button className="play-pause">Pause</button> 
                </div>
            </ProgressBar>
            <div className="controls">
            </div>
        </div>
    );
}

export default MainTimer;