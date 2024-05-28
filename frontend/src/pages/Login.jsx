import React from 'react'

import { Button } from '../components/Button'
import { LoginForm } from '../components/LoginForm'
import img4 from '../assets/Img4.jpg'

export const Login = () => {
  return (
    <main>
      <section>
        <Button message="Iniciar Sesión" to="/auth/login"/>
        <Button message="Registrarse" to="/auth/register"/>
      </section>

      <article>
        <LoginForm />
        <section>
          <h2>Bienvenido de vuelta</h2>
          <p>Inicia sesión para empezar a usar Uber</p>
          <img src={img4} alt="uber" />
        </section>
      </article>
    </main>
  )
}
