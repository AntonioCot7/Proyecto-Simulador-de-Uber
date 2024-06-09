import React, { useState } from 'react';

export const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });


  return (
    <section className="content-background">
      <h1 className="title">Ingresar a Uber</h1>
      <form className="form">
        <div className="parameter">
          <label htmlFor="email">Correo</label>
          <input type="email" name="email" id="email"/>
        </div>
        <div className="parameter">
          <label htmlFor="password">Contraseña</label>
          <input type="password" name="password" id="password"/>
        </div>
        <button id="loginSubmit" className="button" type="submit">Iniciar Sesión</button>
      </form>
    </section>
  );
};
