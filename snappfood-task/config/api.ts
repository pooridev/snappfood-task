import { normalizeVendors } from './normalizers/vendors';
import Axios from 'axios';

const apiUrl = process.env.API_URL;
const apiVersion = 'v3';

export const query = Axios.create({
  baseURL: `${apiUrl}mobile/${apiVersion}/`,
});

query.interceptors.response.use(({ data: axiosData, config }) => {
  if (config.url?.includes('restaurant/vendors-list')) {
    axiosData.data.finalResult = normalizeVendors(axiosData.data.finalResult);
  }

  return axiosData;
});
