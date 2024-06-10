import React, { useEffect, useState } from 'react';
import { Profile } from '../components/Profile';
import { Vehicle } from '../components/Vehicle';
import { useNavigate } from 'react-router-dom';
import { getRoleBasedOnToken, getPassenger, getDriver, getRidesByUser } from '../services/api';
import { RidesHistorial } from '../components/RidesHistorial';

export const Dashboard = () => {
    const [role, setRole] = useState(null);
    const [userData, setUserData] = useState(null);
    const [userRides, setUserRides] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const role = getRoleBasedOnToken();
                setRole(role);

                let data;
                if (role === 'ROLE_PASSENGER') {
                    data = await getPassenger();
                    const response = await getRidesByUser(0, 2);
                    setUserRides(response.content || []);
                } else if (role === 'ROLE_DRIVER') {
                    data = await getDriver();
                }
                setUserData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
                navigate('/auth/login');
            }
        };

        fetchData();
    }, [navigate]);

    const handleClickProfile = () => {
        navigate('/profile/edit');
    }

    const handleClickVehicle = () => {
        navigate('/vehicle/edit');
    }

    return (
        <main className="grid gap-10 my-10 place-items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-6xl">
                <div className="p-8 w-full flex flex-col">
                    <Profile data={userData} />
                    <button
                        id="editProfile"
                        onClick={handleClickProfile}
                        className="bg-primary text-white font-bold mx-6 py-2 px-4 rounded-full cursor-pointer mt-8"
                    >
                        Editar
                    </button>
                </div>

                {role === 'ROLE_DRIVER' ? (
                    <div className="p-8  w-full flex flex-col">
                        <Vehicle data={userData} />
                        <button
                            id="editVehicle"
                            onClick={handleClickVehicle}
                            className="bg-primary text-white font-bold mx-6 py-2 px-4 rounded-full cursor-pointer mt-8"
                        >
                            Editar
                        </button>
                    </div>
                ) : (
                    <div className="p-8 w-full flex flex-col">
                        <RidesHistorial data={userRides} />
                        <button
                            id="editVehicle"
                            className="bg-primary text-white font-bold mx-6 py-2 px-4 rounded-full cursor-pointer mt-8"
                        >
                            Cargar Más ...
                        </button>
                    </div>
                )}
            </div>
        </main>
    );
};