import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const BACKEND_URL = 'http://localhost:8080'; // Spring Boot

export const getRoleBasedOnToken = () => {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('No token found');
  }
  try {
    const decodedToken = jwtDecode(token);
    return decodedToken.role;
  } catch (error) {
    throw new Error('Invalid token format');
  }
};

export const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  return token !== null;
}


export const fetchLogin = async (body) => {
  const response = await axios.post(`${BACKEND_URL}/auth/login`, {
    email: body.email,
    password: body.password
  });
  const token = response.data.token;
  if (token) {
    localStorage.setItem('token', token);
  } else {
    throw new Error('Token is not available');
  }
  return response;
};

export const fetchRegister = async (body) => {
  const response = await axios.post(`${BACKEND_URL}/auth/register`, {
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
    password: body.password,
    phone: body.phone,
    isDriver: body.isDriver,
    category: body.category,
    vehicle: body.vehicle
  });
  const token = response.data.token;
  localStorage.setItem('token', token);
  return response;
};

export const getPassenger = async () => {
  const token = localStorage.getItem('token');
  const response = await axios.get(`${BACKEND_URL}/passenger/me`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const getDriver = async () => {
  const token = localStorage.getItem('token');
  const response = await axios.get(`${BACKEND_URL}/driver/me`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
}

export const getRidesByUser = async (page, size) => {
  const token = localStorage.getItem('token');
  const response = await axios.get(`${BACKEND_URL}/ride/user`, {
    headers: { Authorization: `Bearer ${token}` },
    params: { page, size }
  });
  return response.data;
}

export const updatePassenger = async (body) => {
  const token = localStorage.getItem('token');
  await axios.patch(`${BACKEND_URL}/passenger/me`, {
    firstName: body.firstName,
    lastName: body.lastName,
    phoneNumber: body.phoneNumber
  }, {
    headers: { Authorization: `Bearer ${token}` },
  });
}

export const deletePassenger = async (id) => {
  const token = localStorage.getItem('token');
  await axios.delete(`${BACKEND_URL}/passenger/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
}

export const updateDriverInfo = async (id, body) => {
  const token = localStorage.getItem('token');
  await axios.patch(`${BACKEND_URL}/driver/${id}`, {
    firstName: body.firstName,
    lastName: body.lastName,
    phoneNumber: body.phoneNumber
  }, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return "Driver info updated successfully";
}

export const updateDriverCar = async (id, body) => {
  const token = localStorage.getItem('token');
  await axios.patch(`${BACKEND_URL}/driver/${id}/car`, {
    brand: body.brand,
    model: body.model,
    licensePlate: body.licensePlate,
    fabricationYear: body.fabricationYear,
    capacity: body.capacity
  }, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return "Driver car updated successfully";
}

export const deleteDriver = async (id) => {
  const token = localStorage.getItem('token');
  await axios.delete(`${BACKEND_URL}/driver/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
}