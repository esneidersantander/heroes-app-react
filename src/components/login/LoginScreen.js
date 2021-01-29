import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types'

export const LoginScreen = ({history}) => {
    const { dispatch} = useContext(AuthContext);
    const handleLogin=()=>{
        //redirige hacia una direccion dada pero sse puede regresar al login
        //Inserta una nueva entrada en la pila del historial
        //history.push('/');
        //al redirigir Reemplaza la entrada actual en la pila del historial 
        //history.replace('/');

        const lasPath = localStorage.getItem('lastPath') || '/';

        const newUser ={
            name: 'Limbert'
        }
        const action ={
            type: types.login,
            payload:newUser
        }

        dispatch(action);

        history.replace(lasPath);
    }   


    return (
        <div className="container mt-5">
            <h1>Login</h1>
                <hr/>
                <button
                    className="btn btn-primary"
                    onClick={handleLogin}
                >
                Login    
            </button>
        </div>
    )
}
