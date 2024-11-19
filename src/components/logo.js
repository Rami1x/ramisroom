import Logo from "./rrlogo.png";
import "./logo.css";


function Logos() {
    return (
        <div className="AppearLogo">
            <img src={Logo} alt="logo" width="500" height="500"></img>
        </div>
    );
}

export default Logos;