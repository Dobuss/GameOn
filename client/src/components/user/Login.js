import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as authService from '../../services/authService'
import { useContext } from "react";
import { AuthContext } from '../../contexts/AuthContext';

export const Login = () => {
    const {setStateFunc} = useContext(AuthContext);
    const userData = {
        username: "",
        password: ""
    }
    const redirect = useNavigate();
    const [user, setUser] = useState(userData);
    
    const onChangeHandler = (e) => {
        setUser(oldState => ({...oldState, [e.target.name]: e.target.value}))
    }
    const loginHandler = async (e) => {
        e.preventDefault();
        const loggedUser = await authService.login(user)
        setStateFunc(loggedUser)
            redirect('/')
        }
    return (
    <div className="container-fluid py-6 px-5">
        <div className="row gx-5">
            <div className="col-lg-4 mb-5 mb-lg-0">
                <div className="mb-4">
                    <h1 className="display-5 text-uppercase mb-4"><span className="text-primary">Login </span></h1>
                    <p className="mb-5" style={{fontSize: 30}}>Login into the system to get access to our Games Catalogue and more <i className="bi bi-arrow-right"></i></p>
                </div>
            </div>
        <div className="col-lg-8">
                <div className="bg-light text-center p-5">
                    <form method="POST" onSubmit={loginHandler}>
                        <div className="row g-3">
                            <div className="col-12 col-sm-6">
                                <input type="text" name="username" className="form-control border-0" placeholder="Username" style={{height: 55}} value={user.username} onChange={onChangeHandler}/>
                            </div>
                            <div className="col-12 col-sm-6">
                                <input type="password" name="password" className="form-control border-0" placeholder="Password" style={{height: 55}} value={user.password} onChange={onChangeHandler}/>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-primary w-100 py-3" type="submit">Login</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
}