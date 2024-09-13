import { useState } from 'react';
import { auth } from '../../config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

import './index.css'
import Input from '../../components/input';

import Google from '../../assets/icon/google.png';
import Outlook from '../../assets/icon/office.png';


const Login = () => {
    const [isSignUp, setIsSignUp] = useState(false);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [error, setError] = useState();

    const handleRegister = () => {
        setError('')
        setIsSignUp(true)
    }
    const handleLogin = () => {
        setError('')
        setIsSignUp(false)
    }

    const handleSign = async () => {
        try {
            if (isSignUp) {
                if (password === confirmPassword) {
                    await createUserWithEmailAndPassword(auth, email, password)
                    console.log('Register Berhasil')
                } else {
                    setError('password does not match')
                }
            } else {
                await signInWithEmailAndPassword(auth, email, password)
                setError('')
                console.log('login Berhasil')
            }
        } catch (err) {
            setError('email or password worng')
            
        }
    }

    return (
        <div className="Login-Container">
            <div className='Login-Main'>
                <div className='Login-Content'></div>
                {!isSignUp ? (
                    <SignIn
                        email={email}
                        setEmail={setEmail}
                        password={password}
                        setPassword={setPassword}
                        handleSign={handleSign}
                        handleRegister={handleRegister}
                        error={error} />
                ) : (
                    <SignUp
                        email={email}
                        setEmail={setEmail}
                        password={password}
                        setPassword={setPassword}
                        handleSign={handleSign}
                        handleLogin={handleLogin}
                        setConfirmPassword={setConfirmPassword}
                        error={error} />
                )}
            </div>
        </div>
    )
}

const SignIn = ({ handleSign, setEmail, setPassword, handleRegister, error }) => {
    return (
        <div className='Login-MainContent'>
            <h1>Welcome Back!</h1>
            <p style={{ textAlign: 'center', maxWidth: '70%' }}>Silakan login dengan akun yang sudah anda daftarkan atau dengan email anda</p>
            <div className='Login-Section'>
                <p>Email</p>
                <Input type={"email"} placeholder={"Enter your email address"} onChange={(e) => setEmail(e.target.value)} />
                <p>Password</p>
                <Input type={"password"} placeholder={"Enter your password"} onChange={(e) => setPassword(e.target.value)} />
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex' }}>
                        <input type="checkbox" defaultChecked style={{ cursor: 'pointer' }} />
                        <span style={{ color: "gray" }}>Remember Me</span>
                    </div>
                    <span style={{}}>Forget password</span>
                </div>
                <p style={{ color: 'red' }}>{error}</p>
                <button className='btn-sign' onClick={handleSign}>Sign In</button>
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
                    <p>Don't have an account ? <span onClick={handleRegister}>Register</span></p>
                </div>
            </div>
        </div>
    )
}

const SignUp = ({ handleSign, setEmail, setPassword, setConfirmPassword, handleLogin, error }) => {
    return (
        <div className='Login-MainContent'>
            <h1>Let's Join Us!</h1>
            <p style={{ textAlign: 'center', maxWidth: '70%' }}>Segera daftarkan anda dan dapatkan informasi yang anda perlukan, kami siap membantu anda</p>
            <div className='Login-Section'>
                <p>Email</p>
                <Input type={"email"} placeholder={"Enter your email address"} onChange={(e) => setEmail(e.target.value)} />
                <p>Password</p>
                <Input type={"password"} placeholder={"Enter your password"} onChange={(e) => setPassword(e.target.value)} />
                <p>Confirm Password</p>
                <Input type={"password"} placeholder={"Confirm your password"} onChange={(e) => setConfirmPassword(e.target.value)} />
                <p style={{ color: 'red' }}>{error}</p>
                <button className='btn-sign' onClick={handleSign}>Sign Up</button>

                <div style={{ margin: 'auto', marginTop: '20px' }}>
                    <p>I have an account <span onClick={handleLogin}>Sign In</span></p>
                </div>
            </div>
        </div>
    )
}

export default Login;