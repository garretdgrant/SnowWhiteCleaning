import './Navigation.css'
import {useNavigate} from 'react-router-dom'

const Navigation = () => {
    const navigate = useNavigate();
    const logoClick = (e) => {
        navigate('/logoClick');
    }
    
    return (
        <>
            <div className="nav-bar">
                
        
                
                <div className="nav-left-side">
                <img src="swLogo.png" alt="" className="nav-bar-logo" 
                    onClick={logoClick}/>
                   
                </div>
                
                <div className="nav-center">
                    Snow White Cleaning
                </div>
                
                <div className="nav-right-side">
                    Contact
                </div>
            </div>
        </>
    );
}

export default Navigation;