import React,{useState} from 'react';
// Definiendo estilo en constantes:
// * Estilo para usuario logueado
const loggedStyle = {
    color: 'white'
};

// Estilo para usuario no logueado
const unloggedStyle ={
    color: 'orange',
    fontWeight: 'bold'
}

const GreetingStyled = () => {
    // Generamos un estado para el componente y así controlar si el usuario está o no logueado
    const [logged, setlogged] = useState(false);

    return (
        <div style={ logged ? loggedStyle : unloggedStyle }>
        { logged ?
            (<p>Hola, {props.name}</p>)
        :
            (<p>Please login</p>)
        }
        <button onClick={() => {
            console.log('Botón pulsado');
            setlogged(!logged);
            }}>
            {logged ? 'Logout' : 'Login' }</button>
            
        </div>
    );
}

export default GreetingStyled;

