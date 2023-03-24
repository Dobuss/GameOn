import { createContext } from "react";
import { useState } from "react";
import * as authService from "../services/authService"

export const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {
    const [state, setState] = useState({});
    const onLogout = async () => {
        await authService.logout();
        setState({});
      }
    function setStateFunc (data) {
        setState(data)
      }
    const contextValues = {
        setStateFunc,
        isAuthenticated: !!state.token,
        onLogout
      }
    return (
        <>
        <AuthContext.Provider value={contextValues}>
            {children}
        </AuthContext.Provider>
        </>
    )
}