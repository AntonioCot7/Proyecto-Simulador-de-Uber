import React, { useState } from 'react';

export const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });


  return (
    <section>
      <h1>Ingresar a Uber</h1>
      <form>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email"/>
        </div>
        <div>
          <label htmlFor="password">Contraseña</label>
          <input type="password" name="password" id="password"/>
        </div>
        <button id="loginSubmit" className='bg-primary text-white font-bold mx-6 py-2 px-4 rounded-full cursor-pointer' type="submit">Iniciar Sesión</button>
      </form>
    </section>
  );
};
