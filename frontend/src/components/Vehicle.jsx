import React, { useState } from 'react'
import { FaTaxi } from "react-icons/fa6";


export const Vehicle = () => {
  const [vehicleInfo, setVehicleInfo] = useState({})

  return (
    <article>
      <h1>Vehiculo</h1>
      <section>
        <div>  
          <FaTaxi/>
        </div>
          <ul>
            <li id="vehicleModel">Audi R8</li>
            <li id='driverCategory'><b>Categoría: </b>XL</li>
            <li id='licenseNumber'><b>Placa: </b>ABC123</li>
            <li id='yearOfFabrication'><b>Año de fabricación: </b>2020</li>
            <li id='capacityNumber'><b>Capacidad: </b>4</li>
          </ul>
      </section>
    </article>
  )
}
