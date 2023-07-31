import { useEffect } from 'react';
import {useForm} from 'react-hook-form';
import { useAuth } from '../context/AuthContext.jsx';
import { Navigate, useNavigate, Link } from 'react-router-dom';


function RegisterPage() {

    const {register, handleSubmit, formState: {errors},} = useForm();
    const {signup, isAuthenticated, failures} = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if(isAuthenticated) navigate("/login");
    }, [isAuthenticated]);

    const onSubmit = handleSubmit(async (values) => {
        signup(values);
    });

    return(
        <div className="bg-zinc-800 max-w-md p-10 rounded-md">
            {
                failures.map((error,i) => (
                    <div className="bg-red-500 p-2 text-white" key={i}> 
                        {error}
                    </div>
                ))
            }
            <form onSubmit={onSubmit}>
                <input type="text" {...register("username", {required: true})}
                className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                placeholder="Username"
                />
                {errors.username && (
                    <p className="text-red-500"> Se requiere ingresar usuario</p>
                 )}

                <input type="email" {...register("email", {required: true})}
                className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                placeholder="Email"
                />
                {errors.email && (
                    <p className="text-red-500"> Se requiere ingresar email </p>
                 )}

                <input type="password" {...register("password", {required: true})}
                className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                placeholder="Contraseña"
                />
                {errors.password && (
                    <p className="text-red-500"> Se requiere ingresar contraseña </p>
                 )}
                <p className='flex justify-center'>
                <button type="submit">
                    Registrarse
                </button>
                </p>
            </form>
            <p className='flex justify-evenly '>
                        <Link to = "/login" className= "text-sky-500">
                            Ya posee cuenta? Login
                        </Link>
                </p>
        </div>
    )
}

export default RegisterPage