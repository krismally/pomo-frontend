import { createContext, useState } from "react";

// use context api
export const SettingsContext = createContext();

const SettingsContextProvider = (props) => {
    // set starting states
    const [pomodoro, setPomodoro] = useState({
        work: 25,
        short: 5,
        long: 15,
        session: 4
    })
    const [executing, setExecuting] = useState({})
    const [startAnimate, setStartAnimate] = useState(false)

    // update pomodoro with users config settings
    const setTimerTime = evaluate => {
        switch (evaluate.active) {
            case 'work':
                setPomodoro(evaluate.work)
                break;
            case 'short':
                setPomodoro(evaluate.short)
                break;
            case 'long':
                setPomodoro(evaluate.long)
                break;
            case 'session':
                setPomodoro(evaluate.session)
                break;
            default:
                setPomodoro({
                    work: 25,
                    short: 5,
                    long: 15,
                    session: 4
                })
                break;
        }
    }

    // use updated settings
    const updateExecute = updatedSettings => {
        setExecuting(updatedSettings);
        setTimerTime(updatedSettings);
    }

    // set timer for active timer state
    const setCurrentTimer = active_state => {
        updateExecute({
            ...executing,
            active: active_state
        });
        setTimerTime(executing);
    }

    // start or stop animation
    const startTimer = () => {
        setStartAnimate(true);
    }

    const pauseTimer = () => {
        setStartAnimate(false);
    }

    const stopTimer = () => {
        setStartAnimate(false);
    }

    // reset settings to default
    const SettingsBtn = () => {
        setExecuting({});
        setPomodoro({
            work: 25,
            short: 5,
            long: 15,
            session: 4
        })
    }

    // set display for timer
    const children = ({ remainingTime }) => {
        const minutes = Math.floor(remainingTime / 60);
        const seconds = remainingTime % 60;
    }

    return (
        <SettingsContext.Provider value={{
            pomodoro,
            executing,
            startAnimate,
            SettingsBtn,
            updateExecute,
            setCurrentTimer,
            children,
            startTimer,
            pauseTimer,
            stopTimer
        }}>
            {props.children}
        </SettingsContext.Provider>
    )
}

export default SettingsContextProvider;