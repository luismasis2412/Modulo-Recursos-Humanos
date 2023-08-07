import { useEffect } from 'react';
import {useForm} from 'react-hook-form'
import { useAuth } from '../context/AuthContext.jsx';
import {Link, Navigate, useNavigate} from 'react-router-dom';
import { GetProfile } from '../api/auth.js';
import {useTabIndex} from "react-tabindex";


function HomePage() {

    const {register, handleSubmit, formState: {errors},} = useForm();
    const {signout, isAuthenticated, failures: signinFailures, user } = useAuth();
    const tabIndex = useTabIndex();

    
    useEffect(() => {
        GetProfile(user);
    }, [])


    return(
    <div className='flex h-[calc(100vh-100px)] items-center justify-center my-6'>
        <div className='bg-lime-500/70 box-content h-6/6 w-2/6 p-4 border-lime-800 border-2 rounded-lg'>
            <p className='flex justify-between'>    
            <Link to = "/profile" className= "text-zinc-800 my-6 mx-5" tabIndex={1}> Perfil </Link>
            <Link to ="/login" className= "text-zinc-800 my-6 mx-5" onClick={() => {
                signout();
            }} tabIndex={2}> Salir </Link>
            </p>
            <h1 className='text-2xl font-bold text-center text-zinc-700' tabIndex={3}>Bienvenid@ a su módulo de recursos humanos</h1>
                <h2 className='font-bold text-center my-8 text-zinc-700' tabIndex={4}>Mis aplicaciones disponibles</h2>
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
                {user.role == 'Jefatura' ? ( 
                <>
                <div className='bg-zinc-300 box-content justify-center mx-24 my-6 rounded-2xl border-lime-800 border-2'>
                <button className='max-w-md w-full my-2 text-zinc-700'>Gestión de Personal</button>
                </div>
                </>
                ): (
                null
                )}
                {user.role=='Recursos Humanos' ? (
                <> 
                <div className='bg-zinc-300 box-content justify-center mx-24 my-6 rounded-2xl border-lime-800 border-2'>
                <button className='max-w-md w-full my-2 text-zinc-700'>Gestión de Personal</button>
                </div>
                <div className='bg-zinc-300 box-content justify-center mx-24 my-6 rounded-2xl border-lime-800 border-2'>
                <button className='max-w-md w-full my-2 text-zinc-700'>Reclutamiento y seleccion</button>
                </div>
                <div className='bg-zinc-300 box-content justify-center mx-24 my-6 rounded-2xl border-lime-800 border-2'>
                <button className='max-w-md w-full my-2 text-zinc-700'>Reportería</button>
                </div>
                </>
                ): (
                null
                )}  

                
        </div>
    </div>
    )
}

export default HomePage