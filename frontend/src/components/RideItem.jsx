import React from 'react'
import { FaLocationDot, FaMapLocationDot } from "react-icons/fa6";
import { TbClockHour4Filled } from "react-icons/tb";
import { AiFillDollarCircle } from "react-icons/ai";


export const RideItem = (
  { id, originName, departureDate, destinationName, price }
) => {
  return (
    <section id={id}>
      <div className='flex items-center'>
        <FaLocationDot />
        <b className='ml-2'>Origen:</b>
        <p id='origin' className='ml-2'></p>
      </div>

      <div className='flex items-center'>
        <TbClockHour4Filled />
        <b className='ml-2'>Fecha Salida:</b>
        <p id='departure' className='ml-2'></p>
      </div>

      <div className='flex items-center'>
        <FaMapLocationDot />
        <b className='ml-2'>Destino:</b>
        <p id='destination' className='ml-2'></p>
      </div>

      <div className='flex items-center'>
        <AiFillDollarCircle />
        <b className='ml-2'>Precio:</b>
        <p id='price' className='ml-2'></p>
      </div>

    </section>
  )
}
