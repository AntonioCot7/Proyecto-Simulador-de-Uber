import React from 'react'
import { Profile } from '../components/Profile'

export const EditProfile = () => {
  return (
    <main>
      <article>
        <h1>Editar Perfil</h1>
        <form>
          <div>
            <label htmlFor="firstName">Nombres</label>
            <input 
              type="text" 
              name="firstName" 
              id="firstName"
            />
          </div>
          <div>
            <label htmlFor="lastName">Apellidos</label>
            <input 
              type="text" 
              name="lastName" 
              id="lastName"
            />
          </div>
          <div>
            <label htmlFor="phoneNumber">Celular</label>
            <input 
              type="number" 
              name="phoneNumber" 
              id="phoneNumber"
            />
          </div>
          <button 
            id='updateSubmit' 
            className='bg-primary text-white font-bold mx-6 py-2 px-4 rounded-full cursor-pointer' 
            type="submit"
          >
            Actualizar
          </button>
        </form>
      </article>

      <Profile/>

      <button 
        id='deleteUser'
      >
        Eliminar cuenta
      </button>
    </main>
  )
}
