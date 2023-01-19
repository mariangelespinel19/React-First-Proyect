// Componente que va a contener un formulario para autenticación de usuarios.

import React, {useState} from 'react';

const LoginForm = () => {
    const initialcredentials =[
        {
            user: '',
            password: ''
        }
    ];
    const [credentials , setCredentials] = useState(initialcredentials);

    return (
        <div>
            
        </div>
    );
}

export default LoginForm;
