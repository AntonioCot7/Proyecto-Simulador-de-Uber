import React, { useState } from 'react'
import { Vehicle } from '../components/Vehicle'

export const EditVehicle = () => {
  const [newVehicle, setNewVehicle] = useState({
    brand: '',
    model: '',
    licensePlate: '',
    fabricationYear: 0,
    capacity: 0
  })

  return (
    <main>
      <article>
        <h1>Editar Vehiculo</h1>
        <form>
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
          <button id='vehicleSubmit' className='bg-primary text-white font-bold mx-6 py-2 px-4 rounded-full cursor-pointer' type="submit">Registrarse</button>
        </form>
      </article> 
      <Vehicle />
    </main>
  )
}
