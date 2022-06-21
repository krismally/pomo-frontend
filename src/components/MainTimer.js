const MainTimer = (props) => {
    return (
        <div className="Timer">
            <div className="TimerFace">
                <h4>Session 4/5</h4>
                <h1>25:00</h1>
            </div>
            <div className="controls">
                <button className="sound">Mute/Unmute</button>
                <button className="play-pause">Pause</button> 
            </div>
        </div>
    );
}

export default MainTimer;