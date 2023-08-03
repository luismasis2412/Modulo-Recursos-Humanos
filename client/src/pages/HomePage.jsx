import { useEffect } from 'react';
import {useForm} from 'react-hook-form'
import { useAuth } from '../context/AuthContext.jsx';
import {Link, Navigate, useNavigate} from 'react-router-dom'

function HomePage() {

    const {register, handleSubmit, formState: {errors},} = useForm();
    const {isAuthenticated, failures: signinFailures} = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if(isAuthenticated) navigate("/homepage");
    }, [isAuthenticated]);

    return(
    <div className='flex h-[calc(100vh-100px)] items-center justify-center my-6'>
        <div className='bg-lime-500/70 box-content h-6/6 w-3/6 p-4 border-lime-800 border-2 rounded-lg'>
            <p className='flex justify-between'>    
                <button className='my-6 text-zinc-700 mx-5'>Salir</button>
                <button className='my-6 text-zinc-700 mx-5'>Perfil</button>
            </p>
            <h1 className='text-2xl font-bold text-center text-zinc-700'>Bienvenid@ a su módulo de recursos humanos</h1>
                <h2 className='font-bold text-center my-8 text-zinc-700'>Mis aplicaciones disponibles</h2>
                <div className='bg-zinc-300 box-content justify-center mx-24 my-6 rounded-2xl border-lime-800 border-2'>
                    <button className='max-w-md w-full my-2 text-zinc-700 '>Pagos y facturas</button>
                </div>
                <div className='bg-zinc-300 box-content justify-center mx-24 my-6 rounded-2xl border-lime-800 border-2'>
                    <button className='max-w-md w-full my-2 text-zinc-700'>Vacaciones y permisos</button>
                </div>
                <div className='bg-zinc-300 box-content justify-center mx-24 my-6 rounded-2xl border-lime-800 border-2'>    
                    <button className='max-w-md w-full my-2 text-zinc-700'>Objetivos y rendimiento</button>
                </div>
                <div className='bg-zinc-300 box-content justify-center mx-24 my-6 rounded-2xl border-lime-800 border-2'>
                    <button className='max-w-md w-full my-2 text-zinc-700'>Bolsa de empleo</button>
                </div>
        </div>
    </div>
    )
}

export default HomePage