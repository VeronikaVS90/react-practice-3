import { fetchEvents } from '../services/moviesApi';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const EventsPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchEvents().then(setMovies);
  }, []);

  return (
    <>
      <ul>
        {movies.map(({ id, name }) => (
          <li key={id}>
            <Link to={id}>{name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
