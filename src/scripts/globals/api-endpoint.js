import CONFIG from './config';

const API_ENDPOINT = {
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
  LIST: `${CONFIG.BASE_URL}list`,
  IMAGE: (id, size = 'small') => `${CONFIG.BASE_IMAGE_URL}${size}/${id}`,
};

export default API_ENDPOINT;
