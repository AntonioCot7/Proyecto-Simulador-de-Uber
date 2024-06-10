import React, { useState, useEffect } from 'react';
import { Vehicle } from '../components/Vehicle';
import {updateDriverCar} from "../services/api.js";
import {getDriver} from "../services/api.js";
import { useNavigate } from 'react-router-dom';

export const EditVehicle = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [newVehicle, setNewVehicle] = useState({
    brand: '',
    model: '',
    licensePlate: '',
    fabricationYear: 0,
    capacity: 0
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        let data;
        data = await getDriver();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
        navigate('/auth/login');
      }
    };

    fetchData();
  }, [navigate]);


  const handleChange = (e) => {
    setNewVehicle({
      ...newVehicle,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const driver = await getDriver();
      const driverId = driver.id;
      await updateDriverCar(driverId,newVehicle);
      navigate('/dashboard');
    } catch (error) {
      setErrors(error.response);
    }
  }

  return (
      <main className='grid gap-10 my-10 place-items-center'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-6xl'>
          <article className='bg-secondary p-8 rounded-lg shadow-md w-full flex flex-col'>
            <h1 className='text-2xl font-bold mb-6'>Editar Vehículo</h1>
            <form className='space-y-4' onSubmit={handleSubmit}>
              <div>
                <label htmlFor="brand" className='block text-sm font-normal'>Marca</label>
                <input
                    type="text"
                    name="brand"
                    id="brand"
                    className='mt-1 block w-full px-3 py-2 border border-black rounded-md shadow-sm focus:outline-none focus:border-neutral-600 sm:text-sm bg-secondary'
                    value={newVehicle.brand}
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
                    className='mt-1 block w-full px-3 py-2 border border-black rounded-md shadow-sm focus:outline-none focus:border-neutral-600 sm:text-sm bg-secondary'
                    value={newVehicle.model}
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
                    className='mt-1 block w-full px-3 py-2 border border-black rounded-md shadow-sm focus:outline-none focus:border-neutral-600 sm:text-sm bg-secondary'
                    value={newVehicle.licensePlate}
                    onChange={handleChange}
                />
                {errors.licensePlate && <p className="error-message">{errors.licensePlate}</p>}
              </div>
              <div className='grid grid-cols-2 gap-4'>
                <div>
                  <label htmlFor="fabricationYear" className='block text-sm font-normal'>Año de fabricación</label>
                  <input
                      type="number"
                      name="fabricationYear"
                      id="fabricationYear"
                      className='mt-1 block w-full px-3 py-2 border border-black rounded-md shadow-sm focus:outline-none focus:border-neutral-600 sm:text-sm bg-secondary'
                      value={newVehicle.fabricationYear}
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
                      className='mt-1 block w-full px-3 py-2 border border-black rounded-md shadow-sm focus:outline-none focus:border-neutral-600 sm:text-sm bg-secondary'
                      value={newVehicle.capacity}
                      onChange={handleChange}
                  />
                  {errors.capacity && <p className="error-message">{errors.capacity}</p>}
                </div>
              </div>
              <div className='flex flex-col space-y-4 place-items-center'>
                <button
                    id="vehicleSubmit"
                    className='bg-primary text-white font-bold mx-6 px-4 rounded-full cursor-pointer w-1/2 py-3'
                    type="submit"
                >
                  Actualizar
                </button>
              </div>
            </form>
          </article>

          <div className='px-8 w-full flex flex-col place-items-center'>
            <Vehicle data={userData} />
          </div>
        </div>
      </main>
  );
};