import React, {useState} from 'react'
import { FaUserCircle } from "react-icons/fa";

export const Profile = () => {
  const [profileInfo, setProfileInfo] = useState({})

  return (
    <article>
      <h1>Pasajero</h1>
      <section>
        <div>  
          <FaUserCircle/>
        </div>
        <ul>
          <li id="profileNames">John Doe</li>
          <li id='profileEmail'>john.doe@gmail.com</li>
          <li id='profilePhone'>999999999</li>
          <li id='profileTrips'><b>N° viajes:</b>0</li>
        </ul>
      </section>
    </article>
  )
}
