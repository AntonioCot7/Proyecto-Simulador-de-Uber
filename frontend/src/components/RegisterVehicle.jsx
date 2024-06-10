import React, { useState } from 'react';
import { fetchRegister } from "../services/api.js";
import { useNavigate } from 'react-router-dom';

export const RegisterVehicle = ({ formData }) => {
  const navigate = useNavigate();
  const [vehicleData, setVehicleData] = useState({
    brand: '',
    model: '',
    licensePlate: '',
    fabricationYear: 0,
    capacity: 0,
  });

  const [category, setCategory] = useState('');
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setVehicleData({
      ...vehicleData,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const combinedData = { ...formData, category, vehicle: vehicleData };
    console.log(combinedData); // Debugging output to check data
    try {
      const response = await fetchRegister(combinedData);
      if (response.status === 200 || response.status === 201) {
        navigate('/dashboard');
      }else {
        const data = await response.json();
        setErrors(data);
      }
    } catch (error) {
      setErrors(error.response.data);
    }
  };

  return (
      <section className='bg-secondary p-8 rounded-lg shadow-md w-3/4 mx-auto h-max'>
        <h1 className="text-2xl font-bold text-center mb-4">Registra tu vehículo</h1>
        <form className='space-y-4' onSubmit={handleSubmit}>
          <div>
            <label htmlFor="category" className='block text-sm font-normal'>Categoría</label>
            <select
                name="category"
                id="category"
                className='mt-1 block w-full px-3 py-2 border border-black rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm bg-secondary'
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            >
              <option value="X">X</option>
              <option value="XL">XL</option>
              <option value="BLACK">BLACK</option>
            </select>
            {errors.category && <p className="error-message">{errors.category}</p>}
          </div>
          <div>
            <label htmlFor="brand" className='block text-sm font-normal'>Marca</label>
            <input
                type="text"
                name="brand"
                id="brand"
                className='mt-1 block w-full px-3 py-2 border border-black rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm bg-secondary'
                value={vehicleData.brand}
                onChange={handleChange}
            />
            {errors.brand && <p className="error-message">{errors.brand}</p>}
          </div>
          <div>
            <label htmlFor="model" className='block text-sm font-normal'>Modelo</label>
            <input
                type="text"
                name="model"
                id="model"
                className='mt-1 block w-full px-3 py-2 border border-black rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm bg-secondary'
                value={vehicleData.model}
                onChange={handleChange}
            />
            {errors.model && <p className="error-message">{errors.model}</p>}
          </div>
          <div>
            <label htmlFor="licensePlate" className='block text-sm font-normal'>Placa</label>
            <input
                type="text"
                name="licensePlate"
                id="licensePlate"
                className='mt-1 block w-full px-3 py-2 border border-black rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm bg-secondary'
                value={vehicleData.licensePlate}
                onChange={handleChange}
            />
            {errors.licensePlate && <p className="error-message">{errors.licensePlate}</p>}
          </div>
          <div className='grid grid-cols-2 gap-4'>
            <div>
              <label htmlFor="fabricationYear" className='block text-sm font-normal'>Año de Fabricación</label>
              <input
                  type="number"
                  name="fabricationYear"
                  id="fabricationYear"
                  className='mt-1 block w-full px-3 py-2 border border-black rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm bg-secondary'
                  value={vehicleData.fabricationYear}
                  onChange={handleChange}
              />
              {errors.fabricationYear && <p className="error-message">{errors.fabricationYear}</p>}
            </div>
            <div>
              <label htmlFor="capacity" className='block text-sm font-normal'>Capacidad</label>
              <input
                  type="number"
                  name="capacity"
                  id="capacity"
                  className='mt-1 block w-full px-3 py-2 border border-black rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm bg-secondary'
                  value={vehicleData.capacity}
                  onChange={handleChange}
              />
              {errors.capacity && <p className="error-message">{errors.capacity}</p>}
            </div>
          </div>
          <button id='registerVehicleSubmit' className='w-full bg-primary text-white font-bold py-2 px-4 rounded-full cursor-pointer hover:bg-primary-dark' type="submit">Registrar vehículo</button>
        </form>
      </section>
  );
};