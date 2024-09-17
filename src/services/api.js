import axios from 'axios';

// Axios örneğini oluşturma, gerekli ayarları yapma (baseURL gibi)
const apiClient = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,  // .env dosyasından alınan baseURL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Örnek bir GET isteği (Tüm kitap/film önerilerini almak için)
export const getRecommendations = () => {
  return apiClient.get('/recommendations');
};

// Örnek bir POST isteği (Kullanıcı giriş işlemi için)
export const loginUser = (credentials) => {
  return apiClient.post('/auth/login', credentials);
};

// Örnek bir GET isteği (Detayları almak için)
export const getItemDetails = (itemId) => {
  return apiClient.get(`/items/${itemId}`);
};

// Başka API işlemleri (Favori ekleme vb.) buraya eklenebilir
export const addToFavorites = (itemId) => {
  return apiClient.post(`/favorites`, { itemId });
};
