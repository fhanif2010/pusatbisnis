import './index.css'
import Input from '../../components/input';

import Google from '../../assets/icon/google.png';
import Outlook from '../../assets/icon/office.png';
import Utcc from '../../assets/img/utcc.jpg'
import Kamar from '../../assets/img/background.jpg'

const Login = () => {
    return (
        <div className="Login-Container">
            <div className='Login-Main'>

                <div className='Login-Content'>
                    <img src={Kamar} alt="" />
                </div>
                <div className='Login-MainContent'>

                    <h1>Welcome Back!</h1>
                    <p style={{ textAlign: 'center', maxWidth: '70%' }}>Silakan login dengan akun yang sudah anda daftarkan atau dengan email anda</p>

                    <div className='Login-Section'>
                        <p>Email</p>
                        <Input type={"email"} placeholder={"Enter your email address"} />
                        <p>Password</p>
                        <Input type={"password"} placeholder={"Enter your password"} />
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div style={{display: 'flex'}}>
                                <input type="checkbox" checked="" style={{ cursor: 'pointer' }} />
                                <span style={{ color: "gray" }}>Remember Me</span>
                            </div>
                            <span style={{}}>Forget password</span>
                        </div>
                        <button className='btn-sign'>Sign In</button>
                        <div className='Or'>
                            <hr />
                            <span>Or Sign With</span>
                            <hr />
                        </div>
                        <div className='btn-alt'>
                            <button><img src={Google} />Google</button>
                            <button><img src={Outlook} />Outlook</button>
                        </div>
                        <div style={{ margin: 'auto', marginTop: '20px' }}>
                            <p>Don't have an account ? <span>Register</span></p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login;