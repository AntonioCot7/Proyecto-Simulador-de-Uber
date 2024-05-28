import React, { useState } from 'react'
import { RideItem } from './RideItem'

export const RidesHistorial = () => {
  const [rides, setRides] = useState([])

  return (
    <article>
      <h1>Historial de viajes</h1>
      <section id='ridesHistorial'>
        
      </section>
    </article>
  )
}
