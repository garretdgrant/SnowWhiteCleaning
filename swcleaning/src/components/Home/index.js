import { useNavigate } from 'react-router-dom';
import './Home.css'

const Home = () => {
    const navigate = useNavigate();
    return (
        <>
            <div class="cleaining-lady-container">
                <img src="cleaningSupplies.png" alt="" className='cleaningSupplies'/>
                <div className="superior-cleaning">
                    <span className='superior-cleaning-text'>
                    Your Cleaning <span class="underLine">Solution</span> for Home and Business 
                    in El Dorado County
                    </span>

                    <span class="free-estimate-text" onClick={()=>navigate('/contact')}>
                        Get a free estimate today!
                    </span>
                </div>
            </div>
        </>
    )
}

export default Home;