import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {
    const [state, setState] = useLocalStorage('auth', {});

    const onLogout = () => {
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