import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchLogin } from '../services/api';

export const LoginForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setErrors({
        email: !formData.email ? 'Se requiere correo.' : null,
        password: !formData.password ? 'Se requiere contraseña.' : null,
      });
    } else {
      try {
        const response = await fetchLogin(formData);
        if (response.status === 200) {
          navigate('/dashboard');
        }
      } catch (error) {
        if (error.response && error.response.status === 400) {
          setErrors({
            form: error.response.data,
          });
        } else {
          setErrors({
            form: 'Error desconocido, por favor intenta más tarde',
          });
        }
      }
    }
  };

  return (
      <section className="content-background">
      <h1 className="title">Ingresar a Uber</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="parameter">
          <label htmlFor="email">Correo</label>
          <input type="email" name="email" id="email"
                 value={formData.email}
                 onChange={handleChange}
          />
          {errors.email && <p className='text-red-500 text-sm'>{errors.email}</p>}
        </div>
        <div className="parameter">
          <label htmlFor="password">Contraseña</label>
          <input type="password" name="password" id="password"
                 value={formData.password}
                 onChange={handleChange}
          />
          {errors.password && <p className='text-red-500 text-sm'>{errors.password}</p>}
        </div>
        <button id="loginSubmit" className="button" type="submit">Iniciar Sesión</button>
        {errors.form && <p className="text-red-500 text-sm mt-4">{errors.form}</p>}
      </form>
    </section>
  );
};
