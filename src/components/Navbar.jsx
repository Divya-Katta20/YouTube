import YTLogo from '../images/youtube_logo_icon_167938.png'
import NTlogo from '../images/bell_icon_143051.png'
import VLogo from '../images/videocamera_5631.png'
import '../styles/navbar.css'
import { Link } from 'react-router-dom'
function Navbar() {
    return(
        <div className="navbar">
            <div className="logo">
                 <img width={150} src={YTLogo} alt="" />
            </div>
            <div className="searchBar">
                <input type="text" placeholder='Search' />

            </div>
            <div className="userOptions">
                <div className="navLinks">
                    <Link to="/">Home</Link>
                    <Link to="/add-video">AddVideo</Link>
                </div>
                 {/* <div className="notification">
                <img width={35} src={NTlogo} alt="" />
                </div>
                <div className="vllogo">
                <img width={35} src={VLogo} alt="" />
                </div> */}
                <div className="profile">
                <h4>D</h4>
                </div> 
            </div>
        </div>

    ); 
}
export default Navbar;