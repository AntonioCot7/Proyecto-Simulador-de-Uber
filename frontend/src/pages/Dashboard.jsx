import React  from 'react'
import { Profile } from '../components/Profile'
import { Vehicle } from '../components/Vehicle'

export const Dashboard = () => {
  return (
    <main>
      <div>
        <Profile/>
        <button id='editProfile'>
          Editar
        </button>
      </div>

      <div>
        <Vehicle />
        <button id='editVehicle'>
          Editar
        </button>
      </div>
    </main>
  )
}
