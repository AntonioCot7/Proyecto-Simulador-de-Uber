import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchRegister } from "../services/api.js";

export const RegisterForm = ({ onRegister }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
    isDriver: 'false',
  });

  const formDataPassenger = {
    firstName: formData.firstName,
    lastName: formData.lastName,
    email: formData.email,
    password: formData.password,
    phone: formData.phone,
  };

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.isDriver === 'true') {
      try {
        onRegister(formData);
        onRegister(true);
      } catch (error) {
        setErrors(error.response.data);
      }
    } else {
      try {
        const response = await fetchRegister(formDataPassenger);
        if (response.status === 200 || response.status === 201) {
          navigate('/dashboard');
        } else {
          const errorData = await response.json();
          setErrors(errorData);
        }
      } catch (error) {
        setErrors(error.response.data);
      }
    }
  };

  return (
    <section className="content-background">
      <h1 className="title">Registrarse a Uber</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="flex-container">
        <div className="half-parameter">
          <label htmlFor="firstName">Nombres</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          {errors.firstName && <p className="error-message">{errors.firstName}</p>}
        </div>
        <div className="half-parameter">
          <label htmlFor="lastName">Apellidos</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <p className="error-message">{errors.lastName}</p>}
        </div>
        </div>
        <div className="parameter">
          <label htmlFor="email">Correo</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>
        <div className="parameter">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            name="password"
            id="password"
          value={formData.password}
          onChange={handleChange}
          />
          {errors.password && <p className="error-message">{errors.password}</p>}
        </div>
        <div className="flex-container">
          <div className="half-parameter">
            <label htmlFor="phone">Celular</label>
            <input
                type="text"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
            />
            {errors.phone && <p className="error-message">{errors.phone}</p>}
          </div>
          <div className='half-parameter'>
            <label htmlFor="isDriver">¿Eres Conductor?</label>
            <div className="radio-container">
            <input
                type="radio"
                name="isDriver"
                id="driver"
                value="true"
                checked={formData.isDriver === 'true'}
                onChange={handleChange}
            /> Sí
            <input
                type="radio"
                name="isDriver"
                id="passenger"
                value="false"
                checked={formData.isDriver === 'false'}
                onChange={handleChange}
            /> No
            </div>
          </div>
          {errors.isDriver && <p className="error-message">{errors.isDriver}</p>}
          </div>
            <button id='registerSubmit'
                    className='button'
                    type="submit">Registrarse
            </button>
      </form>
    </section>
  );
}
