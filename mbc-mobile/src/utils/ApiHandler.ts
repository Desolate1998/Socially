import axios, { AxiosInstance } from 'axios';
import config from './globalconfig.json'

class ApiHandler {
  api: AxiosInstance;
  constructor(baseURL) {
    this.api = axios.create({
      baseURL,
      timeout: config.api.timeout,
    });
  }

  async get<TData>(endpoint, params = {}) {
    try {
      const response = await this.api.get<TData>(endpoint, { params });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async post<TData>(endpoint, data) {
    try {
      const response = await this.api.post<TData>(endpoint, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
const apiHandler = new ApiHandler(config.api.route); 

export default apiHandler;
