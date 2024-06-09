import React from 'react';

export const RegisterForm = () => {
  return (
    <section className="content-background">
      <h1 className="title">Registrarse a Uber</h1>
      <form className="form">
        <div className="flex-container">
        <div className="half-parameter">
          <label htmlFor="firstName">Nombres</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
          />
        </div>
        <div className="half-parameter">
          <label htmlFor="lastName">Apellidos</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
          />
        </div>
        </div>
        <div className="parameter">
          <label htmlFor="email">Correo</label>
          <input
            type="email"
            name="email"
            id="email"
          />
        </div>
        <div className="parameter">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            name="password"
            id="password"
          />
        </div>
        <div className="flex-container">
          <div className="half-parameter">
            <label htmlFor="phone">Celular</label>
            <input
                type="text"
                name="phone"
                id="phone"
            />
          </div>
          <div className='half-parameter'>
            <label htmlFor="isDriver">¿Eres Conductor?</label>
            <div className="radio-container">
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
          </div>
          </div>
            <button id='registerSubmit'
                    className='button'
                    type="submit">Registrarse
            </button>
      </form>
    </section>
  );
}
