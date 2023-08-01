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
    <div className='flex h-[calc(100vh-100px)] items-center justify-center'>
        <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>
            <p className='flex justify-between'>    
                <button className='my-3'>Salir</button>
                <button className='my-3'>Perfil</button>
            </p>
            <h1 className='text-2xl font-bold text-center'>Bienvenid@ a su módulo de recursos humanos</h1>
                <h2 className='font-bold text-center'>Mis aplicaciones disponibles</h2>
                <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>
                    <button className='max-w-md w-full my-2'>Pagos y facturas</button>
                    <button className='max-w-md w-full my-2'>Vacaciones y permisos</button>
                    <button className='max-w-md w-full my-2'>Objetivos y rendimiento</button>
                    <button className='max-w-md w-full my-2'>Bolsa de empleo</button>
                </div>
        </div>
    </div>
    )
}

export default HomePage