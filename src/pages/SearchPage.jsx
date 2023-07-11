import { fetchEventsByName } from '../services/moviesApi';
import { useSearchParams, Link, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const SearchPage = () => {
  const [events, setEvents] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const eventName = searchParams.get('eventName');
  const location = useLocation();

  useEffect(() => {
    if (eventName === '' || eventName === null) return;

    async function fetchEvents() {
      const event = await fetchEventsByName(eventName);
      setEvents(event);
    }

    fetchEvents();
  }, [eventName]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ eventName: form.elements.eventName.value });
    form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="eventName" />
        <button type="submit">Search</button>
      </form>
      {events.length > 0 && (
        <ul>
          {events.map(({ id, name }) => (
            <li key={id}>
              <Link to={`${id}`} state={{ from: location }}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      )}

      <Outlet />
    </>
  );
};
