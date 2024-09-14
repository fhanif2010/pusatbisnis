import React, { useEffect, useState } from 'react';
import './index.css'

import UTCC from '../../assets/img/utcc.jpg'
import Background from '../../assets/img/Background.jpg'
import Cafe from '../../assets/img/Cafe.jpg'
import Diklat from '../../assets/img/Diklat2.jpg'
import Klinik from '../../assets/img/Klinik.jpg'
import Wedding from '../../assets/img/Wedding.jpg'
import manage from '../../assets/icon/manage.png'
import research from '../../assets/icon/research.png'
import service from '../../assets/icon/service.png'

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
                <div className="home-content" style={{ backgroundImage: `url(${background[backgroundImage]})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '90vh' }}>
                    <div className="home-aside">
                        <h2>Developing Business and Cooperation Between Agencies to Develop Better</h2>
                        <p>Agency and institutional solutions, we pave the way for your organization's success by driving continuous improvement, innovation, and exceptional performance.</p>
                        <button>Contact Us</button>
                    </div>
                </div>
                <div className="home-content">
                    <div className="home-banner">
                        <h2>What We Do</h2>
                        <hr />
                    </div>
                    <div className="home-cards">
                        <div className="home-card">
                            <img src={research} alt="" />
                            <h2>Strategy & Research</h2>
                            <p>Lorem Ipsume simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </div>
                        <div className="home-card">
                            <img src={service} alt="" />
                            <h2>Service</h2>
                            <p>Lorem Ipsume simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </div>
                        <div className="home-card">
                            <img src={manage} alt="" />
                            <h2>Management & Marketing</h2>
                            <p>Lorem Ipsume simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </div>
                    </div>
                </div>
                <div className='home-content'>
                    <div className='home-content-about'>
                        <img src={UTCC} alt="" />
                        <div>
                            <div className="home-banner" style={{ marginBottom: '10px' }}>
                                <h2>About Us</h2>
                                <hr />
                            </div>
                            <h1>Pusat Bisnis Universitas Terbuka</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            <a href="">Learn More...</a>
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default Home;