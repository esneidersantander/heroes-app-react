import React from 'react'

export const LoginScreen = ({history}) => {
    const handleLogin=()=>{
        //redirige hacia una direccion dada pero sse puede regresar al login
        //Inserta una nueva entrada en la pila del historial
        //history.push('/');
        //al redirigir Reemplaza la entrada actual en la pila del historial 
        history.replace('/');
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
