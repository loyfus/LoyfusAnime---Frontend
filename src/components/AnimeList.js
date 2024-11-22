import React, { useEffect, useState } from 'react';
import { fetchTopAnimes } from '../api/api';
import { Link } from 'react-router-dom';
import './AnimeList.css';
import { FaReact, FaNodeJs, FaFire } from 'react-icons/fa';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AnimeList = () => {
  const [animes, setAnimes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);

  const loadAnimes = async () => {
    setLoading(true);
    try {
      const data = await fetchTopAnimes(page);
      setAnimes((prev) => [...prev, ...data.animes]);
      setHasNextPage(data.pageInfo.hasNextPage);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    toast(
      <div className='toast'>
        <div>
          <FaReact style={{ color: '#61DBFB', marginRight: '10px', fontSize: '24px' }} />
          <FaNodeJs style={{ color: '#68A063', marginRight: '10px', fontSize: '24px' }} />
        </div>
        Ferramentas utilizadas: React e Node.js (com Fetch, Axios) 
      </div>, 
      {
        position: 'top-right',
        autoClose: false,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark'
      }
    );
  }, []);

  useEffect(() => {
    loadAnimes();
  }, [page]);

  const loadMore = () => {
    if (hasNextPage) setPage((prev) => prev + 1);
  };

  if (loading && page === 1) return (
    <div className="loading-text">
      <div className="spinner"></div>
      <p>Carregando...</p>
    </div>
  );

  return (
    <div>
      <h1 className='title-h1'><FaFire /> Animes Em Alta</h1>
      <div className="anime-list">
        {animes.map((anime) => (
          <div className="anime-card" key={anime.id}>
            <Link to={`/anime/${anime.id}`}>
              <img 
                src={anime.coverImage} 
                alt={anime.title.english || anime.title} 
                className="anime-image" 
              />
              <h3 className="anime-title">
                {anime.title.english || anime.title.romaji || anime.title.native || 'Título não disponível'}
              </h3>
            </Link>
          </div>
        ))}
      </div>
      {hasNextPage && (
        <button onClick={loadMore} className="load-more-btn" disabled={loading}>
          {loading ? (
            <div className="spinner" style={{ margin: '0 auto' }}></div>
          ) : (
            'Carregar Mais'
          )}
        </button>
      )}
      <ToastContainer />
    </div>
  );
};

export default AnimeList;
