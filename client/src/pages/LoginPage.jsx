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
        <div className='flex h-[calc(100vh-100px)] items-center justify-center '> 
            <div className=' bg-lime-500/70 box-content h-6/6 w-3/6 p-4 border-lime-800 border-2 rounded-xl'>
            {
                signinFailures.map((error,i) => (
                    <div className="bg-red-500 p-2 text-white text-center my-2" key={i}> 
                        {error}
                    </div>
                ))
            }
                <h1 className='text-2xl font-bold text-center font-400 text-zinc-800 my-6 '>Inicio de Sesión</h1>
                
                <form  className='justify-center items-center mx-16' onSubmit={onSubmit}>
                    <h2 className='items-center text-zinc-800 font-semibold'>Email</h2>
                    <input type="email" {...register("email", {required: true})}
                    className=" border-lime-800 border-2 font-semibold items-center justify-center w-full bg-zinc-300 text-black px-4 py-2 rounded-md my-4"
                    placeholder="email@email.com"
                    />
                    {errors.email && (
                        <p className="text-zinc-300 bg-red-600 w-3/4 rounded-md"> Se requiere ingresar  email</p>
                    )}
                    <h2 className='text-zinc-800 font-semibold'>Contraseña</h2>
                    <input type="password" {...register("password", {required: true})}
                    className=" border-lime-800 border-2 font-semibold w-full bg-zinc-300 text-black px-4 py-2 rounded-md my-4"
                    placeholder="********"
                    />
                    {errors.password && (
                        <p className="text-zinc-300 bg-red-600 w-3/4 rounded-md"> Se requiere ingresar contraseña </p>
                    )}
                    <p className=' border-lime-800 border-2 flex justify-center my-8 bg-zinc-300 w-36 rounded-lg  mx-24'>
                    <button type="submit" className='  text-black font-bold'>
                        Iniciar Sesión
                    </button>
                    </p>
                </form>
                <p className='flex justify-evenly my-7 mx-1'>
                        <Link to = "/restore-password" className='text-sky-700  mx-1'>
                            Olvidó su contraseña?
                        </Link>
                        <Link to = "/register" className= "text-sky-700">
                            Regístrese
                        </Link>
                </p>
            </div>
        </div>
    )
}

export default LoginPage;


