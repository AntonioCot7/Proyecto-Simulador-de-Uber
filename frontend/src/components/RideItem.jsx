import React from 'react';
import { FaLocationDot, FaMapLocationDot } from "react-icons/fa6";
import { TbClockHour4Filled } from "react-icons/tb";
import { AiFillDollarCircle } from "react-icons/ai";

export const RideItem = ({ id, originName, departureDate, destinationName, price }) => {
    return (
        <section id={id} className=" bg-tertiary text-white mb-4 p-4 border rounded-lg">
            <div className='flex items-center mb-2'>
                <FaLocationDot />
                <b className='ml-2'>Origen:</b>
                <p id='origin' className='ml-2'>{originName}</p>
            </div>

            <div className='flex items-center mb-2'>
                <TbClockHour4Filled />
                <b className='ml-2'>Fecha Salida:</b>
                <p id='departure' className='ml-2'>{new Date(departureDate).toLocaleString()}</p>
            </div>

            <div className='flex items-center mb-2'>
                <FaMapLocationDot />
                <b className='ml-2'>Destino:</b>
                <p id='destination' className='ml-2'>{destinationName}</p>
            </div>

            <div className='flex items-center mb-2'>
                <AiFillDollarCircle />
                <b className='ml-2'>Precio:</b>
                <p id='price' className='ml-2'>{price}</p>
            </div>
        </section>
    );
};