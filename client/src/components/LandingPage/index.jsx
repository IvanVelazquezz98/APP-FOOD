import react from 'react'
import { Link } from 'react-router-dom';
import styles from '../LandingPage/LandingPage.module.css';

function landingPage() {
    return (
    
        <div className={styles.background}>
            <Link to="/Home">
                    <button className={styles.button} >Start Now!</button>
            </Link>
        
        </div>
         )

}

export default landingPage