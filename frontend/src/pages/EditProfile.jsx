import React, {useEffect, useState} from 'react';
import { Profile } from '../components/Profile';
import {getPassenger, updatePassenger} from "../services/api.js";
import {getRoleBasedOnToken, deletePassenger,deleteDriver } from "../services/api.js";
import {getDriver} from "../services/api.js";
import {updateDriverInfo} from "../services/api.js";
import { useNavigate } from 'react-router-dom';

export const EditProfile = () => {
  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: ''
  });

  const navigate = useNavigate();
  const [role, setRole] = useState('');
  const [id, setId] = useState('');

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value
    });
  };

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const fetchProfile = async () => {
      setRole(getRoleBasedOnToken());
      if (role === 'ROLE_PASSENGER') {
        const data = await getPassenger();
        setProfile(data);
      } else if (role === 'ROLE_DRIVER') {
        const data = await getDriver();
        setProfile(data);
      }
    };
    fetchProfile();
  }, [role]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (role === 'ROLE_PASSENGER') {
        await updatePassenger(profile);
      } else if (role === 'ROLE_DRIVER') {
        const driver = await getDriver();
        const id = driver.id;
        await updateDriverInfo(id, profile);
      }
      navigate('/dashboard');
    } catch (error) {
      setErrors(error.response);
    }
  };

  const handleDelete = async () => {
    try {
      let role;
      role = getRoleBasedOnToken();
      if (role === 'ROLE_PASSENGER') {
        let passenger= await getPassenger();
        let id = passenger.id;

        await deletePassenger(id);
      } else if (role === 'ROLE_DRIVER') {
        let driver = await getDriver();
        let id = driver.id;
        await deleteDriver(id);
      }
      localStorage.removeItem('token');

      navigate('/');
    } catch (error) {
      setErrors(error.response);
    }
  };

  return (
      <main className='grid gap-10 my-10 place-items-center'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-6xl'>
          <article className='bg-secondary p-8 rounded-lg shadow-md w-full flex flex-col'>
            <h1 className='text-2xl font-bold mb-6'>Editar Perfil</h1>
            <form className='space-y-4' onSubmit={handleSubmit}>
              <div>
                <label htmlFor="firstName" className='block text-sm font-normal'>Nombres</label>
                <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    className='mt-1 block w-full px-3 py-2 border border-black rounded-md shadow-sm focus:outline-none focus:border-neutral-600 sm:text-sm bg-secondary'
                    value={profile ? profile.firstName : ''}
                    onChange={handleChange}
                />
                {errors.firstName && <p className="error-message">{errors.firstName}</p>}
              </div>
              <div>
                <label htmlFor="lastName" className='block text-sm font-normal'>Apellidos</label>
                <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    className='mt-1 block w-full px-3 py-2 border border-black rounded-md shadow-sm focus:outline-none focus:border-neutral-600 sm:text-sm bg-secondary'
                    value={profile ? profile.lastName : ''}
                    onChange={handleChange}
                />
                {errors.lastName && <p className="error-message">{errors.lastName}</p>}
              </div>
              <div>
                <label htmlFor="phoneNumber" className='block text-sm font-normal'>Celular</label>
                <input
                    type="number"
                    name="phoneNumber"
                    id="phoneNumber"
                    className='mt-1 block w-full px-3 py-2 border border-black rounded-md shadow-sm focus:outline-none focus:border-neutral-600 sm:text-sm bg-secondary'
                    value={profile ? profile.phoneNumber : ''}
                    onChange={handleChange}
                />
                {errors.phoneNumber && <p className="error-message">{errors.phoneNumber}</p>}
              </div>
              <div className='flex flex-col space-y-4 place-items-center'>
                <button
                    id='updateSubmit'
                    className='bg-primary text-white font-bold mx-6 px-4 rounded-full cursor-pointer w-1/2 py-3'
                    type="submit"
                >
                  Actualizar
                </button>
              </div>
            </form>
          </article>

          <div className=' p-8 w-full flex flex-col place-items-center'>
            <Profile data={profile}/>
            <button
                id='deleteUser'
                className='w-1/4 bg-red-500 text-white font-bold py-2 rounded-full cursor-pointer hover:bg-red-700 mt-4'
                onClick={handleDelete}
            >
              Eliminar cuenta
            </button>
          </div>
        </div>
      </main>
  );
};