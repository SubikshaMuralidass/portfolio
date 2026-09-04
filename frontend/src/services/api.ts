import axios from 'axios';
import { Project, APIMetrics, ChatMessage } from '../types';

const API_BASE_URL = '/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Projects API
export const projectsAPI = {
  getAll: async (): Promise<Project[]> => {
    const response = await apiClient.get('/projects');
    return response.data;
  },
  getById: async (id: string): Promise<Project> => {
    const response = await apiClient.get(`/projects/${id}`);
    return response.data;
  },
};

// AI Chat API
export const chatAPI = {
  sendMessage: async (message: string, userName?: string): Promise<{ response: string }> => {
    const response = await apiClient.post('/api/ai-chat/', {
      message,
      userName,
    });
    return response.data;
  },
};

// Metrics API
export const metricsAPI = {
  getMetrics: async (): Promise<APIMetrics> => {
    const response = await apiClient.get('/metrics');
    return response.data;
  },
};

// Health check
export const healthCheck = async (): Promise<{ status: string }> => {
  const response = await apiClient.get('/health');
  return response.data;
};

export default apiClient;
