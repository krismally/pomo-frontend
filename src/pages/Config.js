import { useContext, useState } from "react";
import Button from "../components/Button";
import { SettingsContext } from "../context/ConfigContext";

// Set config values with sliders, preset starting vals for pomo
const Config = () => {
    const [newTimer, setNewTimer] = useState({
        work: 25,
        short: 5,
        long: 15,
        sessions: 4,
        active: "work"
    })

    const {updateExecute} = useContext(SettingsContext)

    const handleChange = input => {
        const {name, value} = input.target;
        switch (name) {
            case 'work':
                setNewTimer({
                    ...newTimer,
                    work: parseInt(value)
                })
                break;
            case 'shortBreak':
                setNewTimer({
                    ...newTimer,
                    short: parseInt(value)
                })
                break;
            case 'longBreak':
                setNewTimer({
                    ...newTimer,
                    long: parseInt(value)
                })
                break;
            case 'sessionRounds':
                setNewTimer({
                    ...newTimer,
                    sessions: parseInt(value)
                })
                break;
            default:
                break;
        }
    }

    const handleSubmit = e => {
        e.preventDefault();
        updateExecute(newTimer)
    }

    return (
        <div className="pomo-settings">
            <form noValidate>
                <div className="input-wrapper">
                    <label htmlFor="work">Focus Time: </label>
                    <input className="input" name="work" onChange={handleChange} value={newTimer.work} />
                    <label htmlFor="shortBreak">Short Break: </label>
                    <input className="input" name="shortBreak" onChange={handleChange} value={newTimer.short} />
                    <label htmlFor="longBreak">Long Break: </label>
                    <input className="input" name="longBreak" onChange={handleChange} value={newTimer.long} />
                    <label htmlFor="sessionRounds">Session Rounds: </label>
                    <input className="input" name="sessionRounds" onChange={handleChange} value={newTimer.sessions} />
                </div>
                <Button title="Set Pomodoro" _callback={handleSubmit} />
            </form>
        </div>
    )
};

export default Config;