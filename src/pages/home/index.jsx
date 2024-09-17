import React, { useEffect, useState } from 'react';
import { getStorage, ref, getDownloadURL, listAll } from 'firebase/storage';
import { storage } from '../../config';
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
    const [backgroundUrls, setBackgroundUrls] = useState([]);

    // const backgroundRefs = ['Background', 'Cafe', 'Diklat2', 'Klinik', 'Wedding'];

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const folderRef = ref(storage, '/Image/landingpage');
                const result = await listAll(folderRef);
                const urls = await Promise.all(
                    result.items.map(async (itemRef) => {
                        const url = await getDownloadURL(itemRef);
                        return url;
                    })
                );
                console.log(folderRef)
                setBackgroundUrls(urls);
            } catch (error) {
                console.error("Error fetching images: ", error);
            }
        };
        fetchImages();
    }, []);

    useEffect(() => {
        if (backgroundUrls.length > 0) {
            const interval = setInterval(() => {
                setBackgroundImage((prevImage) => (prevImage + 1) % backgroundUrls.length);
            }, 15000);

            return () => clearInterval(interval);
        }
    }, [backgroundUrls.length]);

    return (
        <div>
            <div className="home-container">
                <div className="home-content" style={{ backgroundImage: `url(${backgroundUrls[backgroundImage]})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '90vh' }}>
                    <div className="home-aside">
                        <h2>Developing Business and Cooperation Between Agencies to Develop Better</h2>
                        <p>Agency and institutional solutions, we pave the way for your organization's success by driving continuous improvement, innovation, and exceptional performance.</p>
                        <button>Contact Us</button>
                    </div>
                </div>

                <div className="home-content">
                    <div className="home-banner">
                        <h2>Upcoming Event</h2>
                        <hr />
                    </div>
                    <div className="home-cards">
                        <div className="home-card" style={{ backgroundColor: 'white', borderRadius: '8px', padding: '10px', textAlign: 'center' }}>
                            <img src={backgroundUrls} alt="" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                            <p>Webinar Barista Series 4</p>
                        </div>
                        <div className="home-card" style={{ backgroundColor: 'white', borderRadius: '8px', padding: '10px', textAlign: 'center' }}>
                            <img src={backgroundUrls} alt="" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                            <p>Webinar Barista Series 4</p>
                        </div>
                        <div className="home-card" style={{ backgroundColor: 'white', borderRadius: '8px', padding: '10px', textAlign: 'center' }}>
                            <img src={backgroundUrls} alt="" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                            <p>Webinar Barista Series 4</p>
                        </div>
                        <div className="home-card" style={{ backgroundColor: 'white', borderRadius: '8px', padding: '10px', textAlign: 'center' }}>
                            <img src={backgroundUrls} alt="" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                            <p>Webinar Barista Series 4</p>
                        </div>
                    </div>
                </div>
                <div className='home-content'>
                    <div className='home-content-about'>
                        <img src={UTCC} alt="" />
                        <div style={{ marginBottom: '30px' }}>
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
                <div className='home-content' style={{ backgroundColor: '#264653', color: 'white' }}>
                    <div className="home-banner" style={{ color: 'white' }}>
                        <h2>What Services Are Available</h2>
                        <hr />
                    </div>
                    <div>
                        <div className="home-cards">
                            <div className="home-cardService">
                                <img src={Wedding} alt="" />
                                <h2>Wedding or Event</h2>
                                <p>Lorem Ipsume simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            </div>
                            <div className="home-cardService">
                                <img src={Klinik} alt="" />
                                <h2>Klinik Pratama</h2>
                                <p>Lorem Ipsume simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            </div>
                            <div className="home-cardService">
                                <img src={Background} alt="" />
                                <h2>Wisma</h2>
                                <p>Lorem Ipsume simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            </div>
                            <div className="home-cardService">
                                <img src={Diklat} alt="" />
                                <h2>Training Institute</h2>
                                <p>Lorem Ipsume simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            </div>
                        </div>
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
            </div>
        </div>
    )
}

export default Home;