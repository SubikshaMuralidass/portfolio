import axios from 'axios';

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// AI Chat API
export const chatAPI = {
  sendMessage: async (
    message: string,
    userName?: string
  ): Promise<{ response: string }> => {
    const response = await apiClient.post('/ai-chat/', {
      message,
      userName,
    });

    return response.data;
  },
};

export default apiClient;