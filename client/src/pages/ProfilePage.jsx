import { useEffect } from 'react';
import {useForm} from 'react-hook-form';
import { useAuth } from '../context/AuthContext.jsx';
import { Navigate, useNavigate, Link } from 'react-router-dom';
import { GetProfile } from '../api/auth.js';
import { useTabIndex } from 'react-tabindex';


function ProfilePage() {

    const {user}  = useAuth();
    const tabIndex= useTabIndex();

    useEffect(() => {
        GetProfile(user);
    }, [])


    return (
        <div className='flex h-[calc(110vh)] items-center justify-center'> 
            <div className='bg-lime-500/70 box-content h-6/6 w-2/6 p-4 border-lime-800 border-2 rounded-xl justify-center text-center'>
            <p className='flex justify-between'>    
            <Link to = "/homepage" className= "text-zinc-800 my-3 mx-5" tabIndex={1}> Regresar </Link>
            </p>
                <h1 className=' text-zinc-700 font-bold text-2xl justify-center text-center' tabIndex={2}>Datos de perfil</h1>
                <h2 className='font-semibold text-zinc-800 my-4' tabIndex={3}>Nombre</h2>
                <p className='bg-zinc-300 box-content justify-center mx-24 my-6 rounded-lg border-lime-800 border-2 text-zinc-700 max-w-md' tabIndex={4}>{user.name}</p>
                <h2 className='font-semibold text-zinc-800 my-4 ' tabIndex={5}>Apellidos</h2> 
                <p className='bg-zinc-300 box-content justify-center mx-24 my-6 rounded-lg border-lime-800 border-2 text-zinc-700' tabIndex={6}>{user.lastname}</p>
                <h2 className='font-semibold text-zinc-800 my-4 ' tabIndex={7}>Profesión</h2>
                <p className='bg-zinc-300 box-content justify-center mx-24 my-6 rounded-lg border-lime-800 border-2 text-zinc-700' tabIndex={8}>{user.title}</p>
                <h2 className='font-semibold text-zinc-800 my-4 ' tabIndex={9}>Correo electrónico</h2>
                <p className='bg-zinc-300 box-content justify-center mx-24 my-6 rounded-lg border-lime-800 border-2 text-zinc-700' tabIndex={10}>{user.email}</p>
                <h2 className='font-semibold text-zinc-800 my-4 ' tabIndex={11}>Rol actual</h2>
                <p className='bg-zinc-300 box-content justify-center mx-24 my-6 rounded-lg border-lime-800 border-2 text-zinc-700' tabIndex={12}>{user.role}</p>
                <p className='flex justify-center my-10 bg-zinc-300 w-36 rounded-lg mx-38 border-lime-800 border-2 text-center m-auto'>
                <button type="submit" className='font-bold justify-center rounded-md text-zinc-800' tabIndex={13}> Editar </button>
                </p>
            </div>
        </div>
    )
}

export default ProfilePage