import React from 'react';
import { RideItem } from './RideItem';

export const RidesHistorial = ({ data }) => {
    return (
        <article className='bg-secondary p-8 rounded-lg'>
            <h1 className="text-2xl font-bold mb-4">Historial de viajes</h1>
            <section id='ridesHistorial'>
                {data.map((ride, index) => (
                    <RideItem
                        key={index}
                        id={index.toString()}
                        originName={ride.originName}
                        departureDate={ride.departureDate}
                        destinationName={ride.destinationName}a
                        price={ride.price}
                    />
                ))}
            </section>
        </article>
    );
};