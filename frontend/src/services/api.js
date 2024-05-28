import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const BACKEND_URL = 'http://127.0.0.1:8080'; // Spring Boot

// Obtiene el endpoint que corresponde al token
export const getRoleBasedOnToken = () => {
  const token = localStorage.getItem('token');
  const decodedToken = jwtDecode(token);
  return decodedToken.role;
}

export const fetchLogin = async (body) => {
  
};