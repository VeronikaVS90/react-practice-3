import { fetchEvents } from '../services/moviesApi';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchEvents().then(setEvents);
  }, []);

  return (
    <>
      <ul>
        {events.map(({ id, name }) => (
          <li key={id}>
            <Link to={`${id}`} state={{ from: location }}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
