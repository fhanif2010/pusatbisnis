import { useEffect } from 'react';
import Logo from '../../assets/img/logo.png';
import './index.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const navStyle = document.querySelector('.nav')

        if(navStyle) {
            window.onscroll = () => {
                if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                    navStyle.classList.add('scrolled')
                } else {
                    navStyle.classList.remove('scrolled')
                }
            };
        }
        return () => {
            window.onscroll = null
        };
    }, []);
    return (
        <div className='nav'>
            <img src={Logo} />
            <div className='navigation'>
                <ul>
                    <li onClick={() => navigate('/')}>Home</li>
                    <li>News</li>
                    <div className="dropdown">
                        <li>Product</li>
                        <div className="dropdown-content">
                            <a>Wisma</a>
                            <a>Event / Wedding</a>
                            <a>Klink Pratama</a>
                            <a>Training Institute</a>
                            <a>IT Solution</a>
                            <a>Green Cafe</a>
                            <a>Green Studio</a>
                            <a>Green Studio</a>
                        </div>
                    </div>
                    <li>Contact</li>
                    <li>About</li>
                </ul>
            </div>
            <button>Sign In</button>
        </div>
    )
}

export default Navbar;