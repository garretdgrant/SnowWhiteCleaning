import './Navigation.css'
import {useNavigate} from 'react-router-dom'

const Navigation = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="nav-bar">
                <div className="nav-left-side">
                    <img src="swLogo.png" alt="" className="nav-bar-logo" 
                    onClick={ e => {navigate("/")}}/>                   
                </div>
                
                <div className="nav-right-side">
                    <div class="nav-information">
                        <span>Serving El Dorado County</span>
                        <span>tammy@snowwhitecleaning.org</span>
                        <span>(530) 407-1119</span>
                    </div>
                    <div class="nav-page-links">
                        <span onClick={e => navigate("/residential")}>
                            Residential Cleaning</span>
                        <span onClick={e => navigate("/commercial")}>
                            Commercial Cleaning</span>
                        <span onClick={e => navigate("/areas")}>
                            Service Areas</span>
                        <span onClick={e => navigate("/about")}>
                            About Us</span>
                        <span className='nav-estimate' onClick={e => navigate("/contact")}>
                            Request an Estimate</span>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Navigation;
