import {createContext, useState, useContext, useEffect} from 'react'
import {RegisterRequest, LoginRequest, verifyTokenRequest, GetProfile, LogoutRequest} from '../api/auth.js'
import Cookies from 'js-cookie'

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
    const [isRegistered, setIsRegistered] = useState(false)
    const [failures, setFailures] =useState([]);
    const [loading, setLoading] = useState(true);

        useEffect(() => {
            if (failures?.length > 0) {
                const timer = setTimeout(() => {
                    setFailures([])
                }, 5000) //5000 ms
                return () => clearTimeout(timer);
            }
        }, [failures])

        const signup = async (user) => {
            try {
                const res = await RegisterRequest(user)
                console.log(res.data);
                //setUser(res.data);
                setIsRegistered(true);
            } catch (error) {
                console.log(error);
                setFailures(error.response.data);
            }
        };

        const signin = async (user) => {
            try {
                console.log(user);
                const res = await LoginRequest(user);
                setUser(res.data);
                setIsAuthenticated(true);
            } catch (error) {
                console.log(error);
                setFailures(error.response.data);
                console.log(failures);
            }
            }; 
    
        const signout = async () => {
            Cookies.remove("token");
            setIsAuthenticated(false);
            setUser(null);
        };
    
        const getprofile = async (user) => {
            try {
                const res = GetProfile(user);
            } catch (error) {
                console.log(error);
            }
        }


        useEffect(() => {
            async function checkLogin() {
                const cookies = Cookies.get()

                if(!cookies.token){
                    setIsAuthenticated(false);
                    setLoading(false);
                    return setUser(null);
            }

                    try {
                        const res = await verifyTokenRequest(cookies.token);
                        console.log(res)
                        if(!res.data){
                        setIsAuthenticated(false)
                        setLoading(false);
                        return;
                        }       
                        setIsAuthenticated(true)
                        setUser(res.data)
                        setLoading(false);
                    } catch (error) {
                        setIsAuthenticated(false);
                        setUser(null);
                        setLoading(false);
                    }
                
            };
            checkLogin();
        }, []);

    return (
        <AuthContext.Provider value={{
            signup, 
            user,
            isAuthenticated,
            isRegistered,
            failures,
            signin,
            signout,
            loading,
            getprofile,
        }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;