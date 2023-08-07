import { useEffect, useState } from 'react';
import {useForm} from 'react-hook-form';
import { useAuth } from '../context/AuthContext.jsx';
import { Navigate, useNavigate, Link } from 'react-router-dom';
import { useTabIndex} from "react-tabindex";


function RegisterPage() {

    const {register, handleSubmit, formState: {errors},} = useForm();
    const {signup, isRegistered ,failures} = useAuth();
    const navigate = useNavigate();
    const tabIndex = useTabIndex();

    useEffect(() => {
        if(isRegistered) navigate("/login");
    }, [isRegistered]);

    const onSubmit = handleSubmit(async (values) => {
        signup(values);
    });

    return(
        <div className='flex h-[calc(110vh-20px)] items-center justify-center'> 
        <div className='bg-lime-500/70 box-content h-6/6 w-2/6 p-4 border-lime-800 border-2 rounded-xl'>

            <h1 className='font-bold text-2xl text-center justify-center text-zinc-800 font-sans my-3' tabIndex={1}>Registro</h1>
            <form onSubmit={onSubmit} className='justify-center items-center mx-16'>
                <h2 className='font-semibold text-zinc-800 ' tabIndex={2}> Nombre </h2>
                <input type="text" {...register("name", {required: true})}
                className="w-full bg-zinc-300 text-black px-4 py-2 border-lime-800 border-2 rounded-md my-2"
                placeholder="Ingrese aquí su nombre"
                tabIndex={3}
                />
                {errors.name && (
                    <p className="text-zinc-300 bg-red-600 w-3/4 rounded-md" tabIndex={4}> Se requiere ingresar nombre</p>
                 )}
                 <h2 className='font-semibold text-zinc-800 ' tabIndex={5}> Apellidos </h2>
                <input type="text" {...register("lastname", {required: true})}
                className="w-full bg-zinc-300 text-black px-4 py-2 border-lime-800 border-2 rounded-md my-2"
                placeholder="Ingrese aquí sus apellidos"
                tabIndex={6}
                />
                {errors.lastname && (
                    <p className="text-zinc-300 bg-red-600 w-3/4 rounded-md" tabIndex={7}> Se requiere ingresar apellidos</p>
                 )}
                 <h2 className='font-semibold text-zinc-800 ' tabIndex={8}> Profesión </h2>
                <input type="text" {...register("title", {required: true})}
                className="w-full bg-zinc-300 text-black px-4 py-2 border-lime-800 border-2 rounded-md my-2"
                placeholder="Ingrese aquí su profesión"
                tabIndex={9}
                />
                {errors.title && (
                    <p className="text-zinc-300 bg-red-600 w-3/4 rounded-md" tabIndex={10}> Se requiere ingresar profesión</p>
                 )}
                <h2 className='font-semibold text-zinc-800 ' tabIndex={11}> Email </h2>
                <input type="email" {...register("email", {required: true})}
                className="w-full bg-zinc-300 text-black px-4 py-2 border-lime-800 border-2 rounded-md my-2"
                placeholder="Ingrese aqui su correo electrónico"
                tabIndex={12}
                />
                {errors.email && (
                    <p className="text-zinc-300 bg-red-600 w-3/4 rounded-md" tabIndex={13}> Se requiere ingresar email </p>
                 )}

                <h2 className='font-semibold text-zinc-800 ' tabIndex={14}> Contraseña </h2>
                <input type="password" {...register("password", {required: true})}
                className="w-full bg-zinc-300 text-black px-4 py-2 border-lime-800 border-2 rounded-md my-2"
                placeholder="Cree aquí su contraseña (mínimo 6 dígitos)"
                tabIndex={15}
                />
                {errors.password && (
                    <p className="text-zinc-300 bg-red-600 w-3/4 rounded-md" tabIndex={16}> Se requiere ingresar contraseña </p>
                 )}
                <h2 className='font-semibold text-zinc-800 ' tabIndex={17}> Rol actual </h2>
                <select  defaultValue="Solicitante externo" type="text" {...register("role", {required: true})}
                className="w-full bg-zinc-300 text-black px-4 py-2 border-lime-800 border-2 rounded-md my-2" 
                tabIndex={18}>
                    <option value='Solicitante externo'>Solicitante externo</option>
                </select>
                
                {errors.role && (
                    <p className="text-zinc-300 bg-red-600 w-3/4 rounded-md" tabIndex={19}> Se requiere un Rol </p>
                 )}
                {
                failures?.map((error , i) => (
                    <div className="bg-red-500 p-2 text-white text-center rounded-lg" key={i} tabIndex={20}> 
                        {error}
                    </div>
                ))
                }
                 
                <p className='flex justify-center my-6 bg-zinc-300 w-36 rounded-lg mx-28 border-lime-800 border-2 m-auto'>
                <button type="submit" className=' flex font-bold justify-center mx-50 rounded-md text-zinc-800 m-auto '>
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

