import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as authService from '../../services/authService'
import { useContext } from "react";
import { AuthContext } from '../../contexts/AuthContext';
import { FormValidatorContext } from '../../contexts/FormValidatorContext';

export const Register = () => {
    const {setStateFunc} = useContext(AuthContext);
    const {UserValidator, errors} = useContext(FormValidatorContext);
    const userData = {
        firstname: "",
        lastname: "",
        username: "",
        email: "",
        password: ""
    }
    const redirect = useNavigate();
    const [user, setUser] = useState(userData);
    
    const onChangeHandler = (e) => {
        setUser(oldState => ({...oldState, [e.target.name]: e.target.value}))
    }
    const registerHandler = async (e) => {
        e.preventDefault();
        const loggedUser = await authService.register(user)
        setStateFunc(loggedUser)
            redirect('/')
        }
    return (
        <div className="container-fluid py-6 px-5">
        <div className="row gx-5">
            <div className="col-lg-4 mb-5 mb-lg-0">
                <div className="mb-4">
                    <h1 className="display-5 text-uppercase mb-4"><span className="text-primary">Register </span></h1>
                    <p className="mb-5" 
                    style={{fontSize: 30}}>Hooray! Welcome to our family. Tell us a bit about yourself 
                    <i className="bi bi-arrow-right"></i></p>
                </div>
            </div>
        <div className="col-lg-8">
                <div className="bg-light text-center p-5">
                    <form method="POST" onSubmit={registerHandler}>
                        <div className="row g-3">
                        <div className="col-12 col-sm-6">
                                <input type="text" 
                                className="form-control border-0" 
                                name="firstname" 
                                placeholder="First Name" 
                                style={{height: 55}} 
                                value={user.firstname} 
                                onBlur = {UserValidator}
                                onChange={onChangeHandler}/>
                                <p className="errors">{errors?.firstname}</p>
                            </div>
                            <div className="col-12 col-sm-6">
                                <input type="text" 
                                className="form-control border-0" 
                                name="lastname" 
                                placeholder="Last Name" 
                                style={{height: 55}} 
                                value={user.lastname}
                                onBlur = {UserValidator} 
                                onChange={onChangeHandler}/>
                                <p className="errors">{errors?.lastname}</p>
                            </div>
                            <div className="col-12 col-sm-6">
                                <input type="text" 
                                className="form-control border-0" 
                                name="username" 
                                placeholder="Username" 
                                style={{height: 55}} 
                                value={user.username} 
                                onBlur = {UserValidator}
                                onChange={onChangeHandler}/>
                                <p className="errors">{errors?.username}</p>
                            </div>
                            <div className="col-12 col-sm-6">
                                <input type="email" 
                                className="form-control border-0" 
                                name="email" 
                                placeholder="Email" 
                                style={{height: 55}} 
                                value={user.email} 
                                onBlur = {UserValidator}
                                onChange={onChangeHandler}/>
                                <p className="errors">{errors?.email}</p>
                            </div>
                            <div className="col-12 col-sm-6">
                                <input type="password" 
                                className="form-control border-0" 
                                name="password" 
                                placeholder="Password" 
                                style={{height: 55}} 
                                value={user.password} 
                                onBlur = {UserValidator}
                                onChange={onChangeHandler}/>
                                <p className="errors">{errors?.password}</p>
                            </div>                          
                            <div className="col-12">
                                <button className="btn btn-primary w-100 py-3" type="submit">Register</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            </div>
    </div>
    );
}