import React from 'react';

export const RegisterForm = () => {
  return (
    <section>
      <h1>Registrarse a Uber</h1>
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
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            name="email" 
            id="email"
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña</label>
          <input 
            type="password" 
            name="password" 
            id="password"
          />
        </div>
        <div>
          <label htmlFor="phone">Celular</label>
          <input 
            type="text" 
            name="phone" 
            id="phone"
          />
        </div>
        <div>
          <label htmlFor="isDriver">¿Eres Conductor?</label>
          <input 
            type="radio" 
            name="isDriver" 
            id="driver" 
            value="true" 
          /> Sí
          <input 
            type="radio" 
            name="isDriver" 
            id="passenger" 
            value="false" 
          /> No
        </div>
        <button id='registerSubmit' className='bg-primary text-white font-bold mx-6 py-2 px-4 rounded-full cursor-pointer' type="submit">Registrarse</button>
      </form>
    </section>
  );
}
