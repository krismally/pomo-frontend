import { Link } from "react-router-dom";


const Footer = (props) => {
    return (
        <nav id="mainNav" className="mainNav">
            <ul>
                <li><Link to="/lists">List</Link></li>
                <li><Link to="/">Timer</Link></li>
                <li><Link to="/config">Config</Link></li>
                
            </ul>
        </nav>
    )
}

export default Footer;