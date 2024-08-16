"use client"

import React, { useState } from 'react'
import { FormRegister } from '../components/FormRegister'
import { RegisterUser } from '../components/RegisterUser';


export default function Register() {

    const [dataForm, setDataForm] = useState(null);

    const handleSendform = (data) => {
        setDataForm(data);
    };

    return (
        <div>
            <FormRegister onSubmit={handleSendform} />
            { /*dataForm && <div>
                <h1>Datos del formulario</h1>
                <p>Correo: {dataForm.email}</p>
                <p>Contraseña: {dataForm.password}</p>
            </div>*/ }
            {dataForm && <RegisterUser dataForm={dataForm}/>}
        </div>
    )
}
