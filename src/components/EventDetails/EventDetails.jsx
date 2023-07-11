import { useParams, useLocation, Link } from 'react-router-dom';
import { fetchEventById } from '../../services/moviesApi';
import { useEffect, useState } from 'react';

export const EventDetails = () => {
  const { eventId } = useParams();
  const location = useLocation();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    fetchEventById(eventId).then(setEvent);
  }, [eventId]);

  if (!event) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {event && (
        <>
          <img
            src={event.images[0].url}
            width={400}
            height={300}
            alt={event.name}
          />
          <h2>{event.name}</h2>
          {/* <p>Date: {event.dates}</p>
          <p>Location: {event.location}</p>
          <p>Promoter: {event.promoters[0].url}</p> */}
          <p>
            Additional Information:{' '}
            {event.pleaseNote ? event.pleaseNote : 'no data'}
          </p>
          <Link to={location.state?.from || '/events'}>Go Back</Link>
        </>
      )}
    </div>
  );
};
