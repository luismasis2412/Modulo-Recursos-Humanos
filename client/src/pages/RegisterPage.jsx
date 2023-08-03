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
        <div className='flex h-[calc(110vh)] items-center justify-center'> 
        <div className='bg-lime-500/70 box-content h-6/6 w-3/6 p-4 border-lime-800 border-2 rounded-xl'>
            {
                failures.map((error , i) => (
                    <div className="bg-red-500 p-2 text-white" key={i}> 
                        {error}
                    </div>
                ))
            }
            <h1 className='font-bold text-2xl text-center justify-center text-zinc-800 font-sans my-3'>Registro</h1>
            <form onSubmit={onSubmit} className='justify-center items-center mx-16'>
                <h2 className='font-semibold text-zinc-800 '> Nombre </h2>
                <input type="text" {...register("name", {required: true})}
                className="w-full bg-zinc-300 text-white px-4 py-2 border-lime-800 border-2 rounded-md my-2"
                placeholder=" Ej: Luis"
                />
                {errors.name && (
                    <p className="text-zinc-300 bg-red-600 w-3/4 rounded-md"> Se requiere ingresar nombre</p>
                 )}
                 <h2 className='font-semibold text-zinc-800 '> Apellidos </h2>
                <input type="text" {...register("lastname", {required: true})}
                className="w-full bg-zinc-300 text-black px-4 py-2 border-lime-800 border-2 rounded-md my-2"
                placeholder="Ej: Vargas Jiménez"
                />
                {errors.lastname && (
                    <p className="text-zinc-300 bg-red-600 w-3/4 rounded-md"> Se requiere ingresar apellidos</p>
                 )}
                 <h2 className='font-semibold text-zinc-800 '> Profesión </h2>
                <input type="text" {...register("title", {required: true})}
                className="w-full bg-zinc-300 text-black px-4 py-2 border-lime-800 border-2 rounded-md my-2"
                placeholder="Ej: Ingeniero "
                />
                {errors.title && (
                    <p className="text-zinc-300 bg-red-600 w-3/4 rounded-md"> Se requiere ingresar profesión</p>
                 )}
                <h2 className='font-semibold text-zinc-800 '> Email </h2>
                <input type="email" {...register("email", {required: true})}
                className="w-full bg-zinc-300 text-black px-4 py-2 border-lime-800 border-2 rounded-md my-2"
                placeholder="Ej: test@email.com"
                />
                {errors.email && (
                    <p className="text-zinc-300 bg-red-600 w-3/4 rounded-md"> Se requiere ingresar email </p>
                 )}

                <h2 className='font-semibold text-zinc-800 '> Contraseña </h2>
                <input type="password" {...register("password", {required: true})}
                className="w-full bg-zinc-300 text-black px-4 py-2 border-lime-800 border-2 rounded-md my-2"
                placeholder="Cree su contraseña (mínimo 6 dígitos)"
                />
                {errors.password && (
                    <p className="text-zinc-300 bg-red-600 w-3/4 rounded-md"> Se requiere ingresar contraseña </p>
                 )}
                <p className='flex justify-center my-6 bg-zinc-300 w-36 rounded-lg mx-24 border-lime-800 border-2'>
                <button type="submit" className='font-bold justify-center mx-50 rounded-md text-zinc-800 '>
                    Registrarse
                </button>
                </p>
                <p className='flex justify-center w-88 my-6'>
                        <Link to = "/login" className= "text-sky-700">
                            Ya posee cuenta? Inicie Sesión
                        </Link>
                </p>
            </form>

        </div>
        </div>
    )
}

export default RegisterPage

