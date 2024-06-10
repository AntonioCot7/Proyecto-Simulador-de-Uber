import React from 'react';
import { FaUserCircle } from "react-icons/fa";

export const Profile = ({ data }) => {
  return (
      <article className='bg-secondary rounded-lg w-full  h-auto pb-7'>
        <h1 className="text-2xl font-bold mb-4 my-4 mx-4">Pasajero</h1>
        <section className="grid grid-cols-2">
          <div className="flex justify-center items-center">
            <FaUserCircle size={100} />
          </div>
          <ul className="text-left flex-1 list-disc ml-5">
            <li id="profileNames" className="mb-2">{data?.firstName} {data?.lastName || 'Nombre no disponible'}</li>
            <li id='profileEmail' className="mb-2">{data?.email || 'Email no disponible'}</li>
            <li id='profilePhone' className="mb-2">{data?.phoneNumber || 'Teléfono no disponible'}</li>
            <li id='profileTrips' className="mb-2"><b>N° viajes:</b> {data?.trips || 0}</li>
          </ul>
        </section>
      </article>
  )
}