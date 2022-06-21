import { Link } from "react-router-dom";


const Footer = (props) => {
    return (
        <nav id="mainNav" className="mainNav">
            <ul>
                <li className="icons" id="listIcon"><Link to="/lists"><ion-icon name="list-outline"></ion-icon></Link></li>
                <li className="icons" id="timerIcon"><Link to="/"><ion-icon name="timer-outline"></ion-icon></Link></li>
                <li className="icons" id="configIcon"><Link to="/config"><ion-icon name="options-outline"></ion-icon></Link></li>
                
            </ul>
        </nav>
    )
}

export default Footer;