import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchAnimeDetails } from '../api/api';
import StreamingButton from './StreamingButton'; 
import { FaVideo, FaTag } from 'react-icons/fa'; 
import './AnimeDetails.css';

const AnimeDetails = () => {
  const { id } = useParams();
  const [anime, setAnime] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const getAnimeDetails = async () => {
      try {
        const data = await fetchAnimeDetails(id);
        setAnime(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getAnimeDetails();
  }, [id]);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  const shouldShowShowMore = anime && anime.description.length > 300;

  if (loading)
    return (
      <div className="loading-text">
        <div className="spinner"></div>
        <p>Carregando...</p>
      </div>
    );
  if (!anime) return <p>Anime não encontrado.</p>;

  return (
    <div className="anime-details-container">
      <Link to="/" className="back-button">
        <span className="arrow">&#8592;</span> Voltar
      </Link>

      <div className="anime-details-card">
        <img src={anime.coverImage} alt={anime.title.english} />
        <div>
          <h1 className="anime-details-title">
            {anime.title.english || anime.title.romaji}
          </h1>
          <p className={`anime-details-description ${showMore ? 'show-more' : ''}`}>
            {anime.description}
          </p>

          {shouldShowShowMore && (
            <button className="show-more-button" onClick={handleShowMore}>
              {showMore ? 'Mostrar menos' : 'Mostrar mais'}
            </button>
          )}

          <p>
            <FaVideo /> Episódios: {anime.episodes || 'N/A'}
          </p>
          <p>
            <FaTag /> Gêneros: {anime.genres?.join(', ')}
          </p>

          <div className="anime-details-streaming">
            <h2>Onde assistir:</h2>
            {anime.streamingEpisodes.length > 0 ? (
              <StreamingButton
                url={anime.streamingEpisodes[0].url}
                site={anime.streamingEpisodes[0].site}
                icon="https://upload.wikimedia.org/wikipedia/commons/f/f6/Crunchyroll_Logo.svg"
              />
            ) : (
              <p>Não há informações de streaming disponíveis.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeDetails;
