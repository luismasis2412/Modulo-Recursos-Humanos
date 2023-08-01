import axios from './axios.js';

const API = 'http://localhost:3000/api'

export const RegisterRequest = async (user) =>  axios.post(`/register`, user);

export const LoginRequest = async (user) => axios.post(`/login`, user);

export const verifyTokenRequest = async () => axios.get(`/verify`);