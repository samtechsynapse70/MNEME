
const API_BASE_URL = (import.meta.env.VITE_API_URL || '').replace(/\/+$/, '');

export const apiUrl = (path) => {
  const endpoint = path.startsWith('/') ? path : `/${path}`;
  return `${API_BASE_URL}${endpoint}`;
};
