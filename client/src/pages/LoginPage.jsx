import { useEffect , useState} from 'react';
import {useForm} from 'react-hook-form'
import { useAuth } from '../context/AuthContext.jsx';
import {Link, Navigate, useNavigate} from 'react-router-dom'
import { useTabIndex} from "react-tabindex"

function LoginPage() {

    const {register, handleSubmit, formState: {errors},} = useForm();
    const {signin, isAuthenticated, failures} = useAuth();
    const navigate = useNavigate();
    const tabIndex = useTabIndex();

    useEffect(() => {
        if(isAuthenticated) navigate("/homepage");
    }, [isAuthenticated]);

    const onSubmit = handleSubmit(async (data) => {
        signin(data);
    });

    return(
        <div className='flex h-[calc(100vh-100px)] items-center justify-center '> 
            <div className=' bg-lime-500/70 box-content h-5/6 w-2/6 p-4 border-lime-800 border-2 rounded-xl'>
                <h1 className='text-2xl font-bold text-center font-400 text-zinc-800 my-6 ' tabIndex={1}>Inicio de Sesión</h1>         
                <form  className='justify-center items-center mx-16' onSubmit={onSubmit}>
                    <h2 className='items-center text-zinc-800 font-semibold' tabIndex={2}>Email</h2>
                    <input type="email" {...register("email", {required: true})}
                    className=" border-lime-800 border-2 font-semibold items-center justify-center w-full bg-zinc-300 text-black px-4 py-2 rounded-md my-4"
                    placeholder="Ingrese aquí su correo registrado"
                    tabIndex={2}
                    />
                    {errors.email && (
                        <p className="text-zinc-300 bg-red-600 w-3/4 rounded-m" tabIndex={3}> Se requiere ingresar  email</p>
                    )}
                    <h2 className='text-zinc-800 font-semibold' tabIndex={4}>Contraseña</h2>
                    <input type="password" {...register("password", {required: true})}
                    className=" border-lime-800 border-2 font-semibold w-full bg-zinc-300 text-black px-4 py-2 rounded-md my-4"
                    placeholder="Ingrese aquí su contraseña"
                    tabIndex={5}
                    />
                    {errors.password && (
                        <p className="text-zinc-300 bg-red-600 w-3/4 rounded-md" tabIndex={6}> Se requiere ingresar contraseña </p>
                    )}
                    {
                    failures?.map((error,i) => (
                        <div className="bg-red-600 p-2 text-white text-center my-2 rounded-lg" key={i} tabIndex={7}> 
                            {error}
                        </div>
                    ))
                    }
                    <p className=' border-lime-800 border-2 flex justify-center my-8 bg-zinc-300 w-36 rounded-lg  mx-20'>
                    <button type="submit" className='  text-black font-bold'>
                        Iniciar Sesión
                    </button>
                    </p>
                </form>
                <p className='flex justify-evenly my-7 mx-1'>
                        <Link to = "/restore-password" className='text-sky-700  mx-1'>
                            ¿Olvidó su contraseña?
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


