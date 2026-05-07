import { api } from './api';

export const getDashboard = async () => {
  const response = await api.get('/dashboard');
  return response.data;
};

export const getInsights = async () => {
  const response = await api.get('/insights');
  return response.data;
};