// This will be our logo link that will take us to the about page and our user button
import { Link } from "react-router-dom";


const Header = (props) => {
    return (
        <nav id="appInfo" className="appInfo">
            <Link to="/about">PomoTom</Link>
            <Link to="/user">User</Link>
        </nav>
    )
}

export default Header;