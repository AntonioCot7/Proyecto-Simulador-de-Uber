import React, { useState } from 'react'
import { FaTaxi } from "react-icons/fa6";


export const Vehicle = ({data}) => {

  return (
      <article className='bg-secondary p-8 rounded-lg'>
        <h1 className="text-2xl font-bold mb-4">Vehiculo</h1>
        <section className="grid grid-cols-2 gap-5">
          <div className="px-12 py-12">
            <FaTaxi size={100} />
          </div>
          <ul className="text-left flex-1 list-disc ml-5">
            <li id="vehicleModel" className="mb-2">{data?.vehicle?.brand} {data?.vehicle?.model}</li>
            <li id='driverCategory' className="mb-2"><b>Categoría: </b>{data?.category}</li>
            <li id='licenseNumber' className="mb-2"><b>Placa: </b>{data?.vehicle?.licensePlate}</li>
            <li id='yearOfFabrication' className="mb-2"><b>Año de fabricación: </b>{data?.vehicle?.fabricationYear}</li>
            <li id='capacityNumber' className="mb-2"><b>Capacidad: </b>{data?.vehicle?.capacity}</li>
          </ul>
        </section>
      </article>
  )
}
