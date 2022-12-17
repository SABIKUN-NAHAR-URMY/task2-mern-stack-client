import React from 'react';
import { Link } from 'react-router-dom';
import loginImg from '../../images/login.jpg';

const Login = () => {
    const handelLogin = event => {
        event.preventDefault();
        const form = event.target;
        const userName = form.userName.value;
        const password = form.password.value;
        console.log(userName, password);
    }

    
    return (
        <div className="hero">
            <div className="hero-content my-10 grid md:grid-cols-2 gap-20 flex-col lg:flex-row">
                <div className="text-center w-full lg:text-left">
                    <img className='rounded-lg' src={loginImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handelLogin} className="card-body">
                        <h1 className="text-5xl font-bold">Login</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">UserName</span>
                            </label>
                            <input name='userName' type="text" placeholder="UserName" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" />

                        </div>
                        <div className="form-control mt-6">
                            <input className="btn bg-slate-600" type="submit" value="Login" />
                        </div>

                        <Link className='underline' to={'/forgetPass'}>Forgot Password?</Link>
                        
                    </form>
                    <p className='text-center py-7'>New to <strong>ATG.WORLD</strong>? <Link className='text-slate-600' to='/register'>Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;