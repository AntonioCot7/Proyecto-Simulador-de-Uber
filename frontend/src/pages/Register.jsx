import React, { useState } from 'react'
import { Button } from '../components/Button'
import { RegisterForm } from '../components/RegisterForm'
import { RegisterVehicle } from '../components/RegisterVehicle'
import img6 from '../assets/Img6.png'

export const Register = () => {
  const[vehicleRegister, setVehicleRegister] = useState(false);

  return (
    <main>
      <section className="navigation-buttons">
        <Button message="Iniciar Sesión" to="/auth/login"/>
        <Button message="Registrarse" to="/auth/register"/>
      </section>

      <article className="main-content">
        <section className="content">
          <h1 className="title">¡Bienvenido!</h1>
          <p className="subtitle">Regístrate como pasajero o conductor para empezar con Uber</p>
          <img className='w-4/5 mx-auto' src={img6} alt="uber" />

        </section>
        { vehicleRegister ? 
          <RegisterVehicle /> 
          : 
          <RegisterForm />
        }
      </article>
    </main>
  )
}
