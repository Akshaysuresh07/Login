import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logos from '../assets/logos.jpg'

function Login() {

    const navigate = useNavigate()
    const [userInputs, setUserInputs] = useState({ email: "", password: "" })
    console.log(userInputs);

    const handleLogin = (e) => {
        e.preventDefault()

        const emailRegex = /\b[A-Za-z0-9._%+-]+@gmail\.com\b/;
        const minLength = 8;

        if (userInputs.email && userInputs.password) {
            if (!emailRegex.test(userInputs.email)) {
                toast.warning("Please enter a valid Gmail address.");
                return;
            }

            if (userInputs.password.length < minLength) {
                toast.warning("Password must be at least 8 char.");
                return;

            }
            setTimeout(() => {
                navigate('/home')
            }, 2000)
            setUserInputs({ email: '', password: '' });

        }
        else {
            toast.warning("Please fill form")
        }
    }

    return (
        <>
            <div className='container-fluid' style={{ height: '100vh' }}>

                <div className="row">
                    <div className="col-lg-6">
                        <img src={logos} width={'100%'} height={'600px'}></img>
                    </div>
                    <div className="col-lg-6 mt-4  ">
                        <div className=" border shadow  d-flex flex-column align-items-center rounded">
                            <h1 className='mt-5 fs-2 fw-bold'>Login</h1>
                            <h3 className='mt-2 ' style={{ fontFamily: "Playfair Display" }}>Welcome Back</h3>

                            <div className='mt-5'>
                                <input style={{ backgroundColor: '#DDF2FD', width: '330px' }} value={userInputs.email} onChange={e => setUserInputs({ ...userInputs, email: e.target.value })} className='form-control rounded p-2  mb-3' type="email" placeholder='Username' />
                                <input style={{ backgroundColor: '#DDF2FD', width: '330px' }} value={userInputs.password} onChange={e => setUserInputs({ ...userInputs, password: e.target.value })} className='form-control rounded p-2  mb-3' type="password" placeholder='Password' />

                            </div>
                            <div className=" d-flex justify-content-between align-items-center w-50 mt-1">
                            <label className="mb-1" style={{ fontSize: '12px', fontFamily: 'PT Sans' }}>
                                <input type="checkbox" className="me-2" />
                                Remember me
                            </label>
                            <label className="mb-1" style={{ fontSize: '12px', fontFamily: 'PT Sans' }}>
                                Forget password?
                            </label>

                            </div>

                            <div className=" w-100 justify-content-center d-flex mt-5">
                                <button onClick={handleLogin} className='w-50 rounded' style={{ backgroundColor: '#3559E0', color: 'white', height: '40px' }}>Sign in</button>

                            </div>
                            <div className=" w-100  justify-content-center d-flex mt-4 " >
                                <GoogleLogin

                                    onSuccess={credentialResponse => {
                                        const credentialResponseDecoded = jwtDecode(credentialResponse.credential);
                                        console.log(credentialResponseDecoded);
                                        sessionStorage.setItem("userName", credentialResponseDecoded.name);
                                        setTimeout(() => {
                                            navigate('/home')
                                        }, 2000)
                                        toast.success("Login Succesfully")
                                    }}
                                    onError={() => {
                                        console.log('Login Failed');
                                    }}
                                />

                            </div>

                            <div >
                                <p style={{ fontFamily: 'PT Sans' }} className='mt-lg-5'>Don't have an account? <span className='text-info'>SignUp</span> </p>
                            </div>

                        </div>

                    </div>
                </div>
                <ToastContainer position='top-center' theme='colored' autoClose={3000} />
            </div>
        </>
    );
}

export default Login;