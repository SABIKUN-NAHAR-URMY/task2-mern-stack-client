import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import loginImg from '../../images/login.jpg';

const Register = () => {
    const navigate = useNavigate();

    const handelRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const userName = form.userName.value;
        const email = form.email.value;
        const password = form.password.value;

        const usersPost = {
            userName: userName,
            email: email,
            password: password
        }

        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(usersPost)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                form.reset();
                navigate('/');
            })
            .catch(error => console.error(error))
    }


    return (
        <div className="hero">
            <div className="hero-content my-10 grid md:grid-cols-2 gap-20 flex-col lg:flex-row">
                <div className="text-center w-full lg:text-left">
                    <img className='rounded-lg' src={loginImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handelRegister} className="card-body">
                        <h1 className="text-5xl font-bold">Register</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">UserName</span>
                            </label>
                            <input name='userName' type="text" placeholder="UserName" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="Email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" />

                        </div>
                        <div className="form-control mt-6">
                            <input className="btn bg-slate-600" type="submit" value="Register" />
                        </div>

                    </form>
                    <p className='text-center py-7'>Already have an Account? <Link className='text-slate-600' to='/login'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;