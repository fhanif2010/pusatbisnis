import React, { useEffect, useState } from 'react';
import './index.css'

import Background from '../../assets/img/Background.jpg'
import Cafe from '../../assets/img/Cafe.jpg'
import Diklat from '../../assets/img/Diklat2.jpg'
import Klinik from '../../assets/img/Klinik.jpg'
import Wedding from '../../assets/img/Wedding.jpg'

const Home = () => {
    const [backgroundImage, setBackgroundImage] = useState(0);

    const background = [Background, Cafe, Diklat, Klinik, Wedding];

    useEffect(() => {
        const interval = setInterval(() => {
            setBackgroundImage((prevImage) => (prevImage + 1) % background.length);
        }, 10000);

        return () => clearInterval(interval);
    }, [background.length]);

    return (
        <div>
            <div className="home-container">
                <div className="home-content" style={{ backgroundImage: `url(${background[backgroundImage]})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className="home-aside">
                        <h2>Developing Business and Cooperation Between Agencies to Develop Better</h2>
                        <p>Agency and institutional solutions, we pave the way for your organization's success by driving continuous improvement, innovation, and exceptional performance.</p>
                        <button>Contact Us</button>
                    </div>
                </div>
                <div className="home-content" style={{ justifyContent: 'center'}}>
                    <div className="home-banner">
                    What we do
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;