import React, { useState } from 'react'
import { Button } from '../components/Button'
import { RegisterForm } from '../components/RegisterForm'
import { RegisterVehicle } from '../components/RegisterVehicle'
import img6 from '../assets/Img6.png'

export const Register = () => {
  const[vehicleRegister, setVehicleRegister] = useState(false);

  return (
    <main>
      <section>
        <Button message="Iniciar Sesión" to="/auth/login"/>
        <Button message="Registrarse" to="/auth/register"/>
      </section>

      <article>
        <section>
          <h1>¡Bienvenido!</h1>
          <p>Regístrate como pasajero o conductor para empezar con Uber</p>
          <img src={img6} alt="uber" />

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
