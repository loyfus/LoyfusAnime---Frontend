import axios from 'axios';

const apiUrl = process.env.REACT_APP_APIURL;

const api = axios.create({
  baseURL: apiUrl, // URL do backend
});

export const fetchTopAnimes = async (page = 1, perPage = 20) => {
  try {
    const response = await api.get('/top-animes', {
      params: { page, perPage }, // Adicionando suporte para paginação
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar os TOP animes:', error);
    throw error;
  }
};

export const fetchAnimeDetails = async (id) => {
  try {
    const response = await api.get(`/top-animes/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao buscar detalhes do anime ${id}:`, error);
    throw error;
  }
};
