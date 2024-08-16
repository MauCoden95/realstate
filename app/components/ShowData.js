import React from 'react'

export const ShowData = ({dataForm}) => {

  

  return (
    <div>
        <h1>Datos del formulario</h1>
        <p>Correo: {dataForm.email}</p>
        <p>Contraseña: {dataForm.password}</p>
    </div>
  )
}
