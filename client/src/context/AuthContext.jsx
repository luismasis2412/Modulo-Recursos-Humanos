import {createContext, useState, useContext, useEffect} from 'react'
import {RegisterRequest, LoginRequest} from '../api/auth.js'

export const AuthContext = createContext()

export const useAuth = () => {
    const context = useContext(AuthContext)
    if(!context){
        throw new Error("useAuth must be within AuthProvider");
    }
    return context
}

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [failures, setFailures] =useState([]);

    const signup = async (user) => {
        try {
            const res = await RegisterRequest(user)
            console.log(res.data);
            setUser(res.data);
            setIsAuthenticated(true);
        } catch (error) {
            console.log(error.response);
            setFailures(error.response.data);
        }
    };

    const signin = async (user) => {
        try {
            const res = await LoginRequest(user);
            console.log(res)
        } catch (error) {

            if(Array.isArray(error.response.data)) {
                return setFailures(error.response.data)
            }
            setFailures([error.response.data.message]);
        }

    };

    useEffect(() => {
        if (failures.length > 0) {
            const timer = setTimeout(() => {
                setFailures([])
            }, 5000) //5000 ms
            return () => clearTimeout(timer);
        }
    }, [failures])

    return (
        <AuthContext.Provider value={{
            signup, 
            user,
            isAuthenticated,
            failures,
            signin,
        }}
        >
            {children}
        </AuthContext.Provider>
    );
};