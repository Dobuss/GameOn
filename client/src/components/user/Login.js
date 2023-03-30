import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as authService from "../../services/authService";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { FormValidatorContext } from "../../contexts/FormValidatorContext";
import './authStyle.css'

export const Login = () => {
  const { setStateFunc } = useContext(AuthContext);
  const { UserValidator, errors } = useContext(FormValidatorContext);

  const [serverError, setServerError] = useState(null);

  const userData = {
    username: "",
    password: "",
  };
  const redirect = useNavigate();
  const [user, setUser] = useState(userData);

  const onChangeHandler = (e) => {
    setUser((oldState) => ({ ...oldState, [e.target.name]: e.target.value }));
  };
  const loginHandler = (e) => {
    e.preventDefault();
    authService
      .login(user)
      .then((loggedUser) => {
        setStateFunc(loggedUser);
        redirect("/");
      })
      .catch((err) => {
        setServerError(err);
      });
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="mb-4">
            <h1 className="uppercase">
              <span className="text-primary">Login </span>
            </h1>
            <p className="mb-5" style={{ fontSize: 30 }}>
              Login into the system to view more information, create new games, write comments and like content <i className="bi bi-arrow-right"></i>
            </p>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="formDiv">
            <form method="POST" onSubmit={loginHandler}>
              <div className="row form">
                <div className="formRow">
                  <input
                    type="text"
                    name="username"
                    className="formControl"
                    placeholder="Username"
                    style={{ height: 55 }}
                    value={user.username}
                    onBlur={UserValidator}
                    onChange={onChangeHandler}
                  />
                  <p className="errors">{errors?.username}</p>
                </div>
                <div className="formRow">
                  <input
                    type="password"
                    name="password"
                    className="formControl"
                    placeholder="Password"
                    style={{ height: 55 }}
                    value={user.password}
                    onBlur={UserValidator}
                    onChange={onChangeHandler}
                  />
                  <p className="errors">{errors?.password}</p>
                </div>
                <div className="buttonDiv">
                  <p className="error">{serverError}</p>
                  <button className="btn btn-primary w-100 py-3" type="submit">
                    Login
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
