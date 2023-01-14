import CustomAxiosInstance from '~/utils/axios';

const API_ENDPOINT = 'https://api-zingmp3.vercel.app/api';

export const apiInstance = new CustomAxiosInstance(API_ENDPOINT);

export default apiInstance;
