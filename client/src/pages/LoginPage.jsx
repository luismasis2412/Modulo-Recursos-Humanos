import { useEffect } from 'react';
import {useForm} from 'react-hook-form'
import { useAuth } from '../context/AuthContext.jsx';
import {Link, Navigate, useNavigate} from 'react-router-dom'

function LoginPage() {
    const {register, handleSubmit, formState: {errors},} = useForm();
    const {signin, isAuthenticated, failures: signinFailures} = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if(isAuthenticated) navigate("/homepage");
    }, [isAuthenticated]);

    const onSubmit = handleSubmit(async (data) => {
        signin(data);
    });

    return(
        <div className='flex h-[calc(100vh-100px)] items-center justify-center'> 
            <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>
            {
                signinFailures.map((error,i) => (
                    <div className="bg-red-500 p-2 text-white text-center my-2" key={i}> 
                        {error}
                    </div>
                ))
            }
                <h1 className='text-2xl font-bold text-center'>Inicio de Sesión</h1>
                
                <form onSubmit={onSubmit}>
                    <input type="email" {...register("email", {required: true})}
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    placeholder="Email"
                    />
                    {errors.email && (
                        <p className="text-red-500"> Se requiere ingresar un email</p>
                    )}

                    <input type="password" {...register("password", {required: true})}
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    placeholder="Contraseña"
                    />
                    {errors.password && (
                        <p className="text-red-500"> Se requiere ingresar su contraseña </p>
                    )}
                    <p className='flex justify-center'>
                    <button type="submit" className='text-center'>
                        Iniciar Sesión
                    </button>
                    </p>
                </form>
                <p className='flex justify-evenly '>
                        <Link to = "/restore-password" className='text-sky-500'>
                            Olvidó su contraseña?
                        </Link>
                        <Link to = "/register" className= "text-sky-500">
                            Regístrese
                        </Link>
                </p>
            </div>
        </div>
    )
}

export default LoginPage