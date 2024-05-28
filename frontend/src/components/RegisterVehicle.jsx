import React, { useState } from 'react'

export const RegisterVehicle = () => {
  const [vehicleData, setVehicleData] = useState({
    brand: '',
    model: '',
    licensePlate: '',
    fabricationYear: 0,
    capacity: 0
  })

  return (
    <section>
      <h1>Registra tu vehículo</h1>
      <form>
        <div>
          <label htmlFor="category">Category</label>
          <select
            name="category"
            id="category"
          >
            <option value="X">X</option>
            <option value="XL">XL</option>
            <option value="BLACK">BLACK</option>
          </select>
        </div>
        <div>
          <label htmlFor="brand">Brand</label>
          <input 
            type="text" 
            name="brand" 
            id="brand"
          />
        </div>
        <div>
          <label htmlFor="model">Model</label>
          <input 
            type="text" 
            name="model" 
            id="model"
          />
        </div>
        <div>
          <label htmlFor="licensePlate">LicensePlate</label>
          <input 
            type="text" 
            name="licensePlate" 
            id="licensePlate"
          />
        </div>
        <div>
          <label htmlFor="fabricationYear">FabricationYear</label>
          <input 
            type="number" 
            name="fabricationYear" 
            id="fabricationYear"
          />
        </div>
        <div>
          <label htmlFor="capacity">Capacity</label>
          <input 
            type="number" 
            name="capacity" 
            id="capacity"
          />
        </div>
        <button id='registerVehicleSubmit' className='bg-primary text-white font-bold mx-6 py-2 px-4 rounded-full cursor-pointer' type="submit">Registrarse</button>
      </form>
    </section>
  );
}
