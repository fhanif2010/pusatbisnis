import Logo from '../../assets/img/logo.png';
import './index.css';

const Navbar = () => {
    return (
        <div className='component'>
            <img src={Logo} />
            <div className='navigation'>
                <ul>
                    <li>Home</li>
                    <li>News</li>
                    <li>Contact</li>
                    <li>About</li>
                </ul>
            </div>
            <button>Sign In</button>
        </div>
    )
}

export default Navbar;