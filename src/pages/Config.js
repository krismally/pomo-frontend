import { useState } from "react";
import ReactSlider from "react-slider";

import "./slider.css"


// Set config values with sliders, preset starting vals for pomo
const Config = (props) => {
    return (
        <div className="pomo-settings">
            <label>Focus Time: </label>
                <ReactSlider 
                    className="slider"
                    thumbClassName="thumb"
                    trackClassName
                    ="track"
                    value={25}
                    min={1}
                    max={90}
                />
            <label>Short Break: </label>
                <ReactSlider 
                    className="slider"
                    thumbClassName="thumb"
                    trackClassName="track"
                    value={5}
                    min={1}
                    max={45}
                />
            <label>Long Break: </label>
                <ReactSlider 
                    className="slider"
                    thumbClassName="thumb"
                    trackClassName="track"
                    value={15}
                    min={1}
                    max={60}
                />
            <label>Session Rounds: </label>
                <ReactSlider 
                    className="slider"
                    thumbClassName="thumb"
                    trackClassName="track"
                    value={4}
                    min={1}
                    max={8}
                />
        </div>
    )
};

export default Config;