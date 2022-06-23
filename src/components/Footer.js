import { Link } from "react-router-dom";


const Footer = (props) => {
    return (
        <footer id="mainNav" className="mainNav">
            <ul>
                <li className="icons" id="listIcon"><Link to="/lists"><ion-icon name="list-outline" style={{ fontSize: '75px' }}></ion-icon></Link></li>
                <li className="icons" id="timerIcon"><Link to="/"><ion-icon name="timer-outline" style={{ fontSize: '75px' }}></ion-icon></Link></li>
                <li className="icons" id="configIcon"><Link to="/config"><ion-icon name="options-outline" style={{ fontSize: '75px' }}></ion-icon></Link></li>
                
            </ul>
        </footer>
    )
}

export default Footer;