// import { useParams } from 'react-router-dom';
import useFetchEvent from '../../hooks/useFetchEvent';

const EventsSubPage = () => {
  const event = useFetchEvent();
  console.log(event);

  return (
    <div>
      {event && (
        <>
          <img src={event.images[0].url} alt={event.name} />
          <h2>{event.name}</h2>
        </>
      )}
    </div>
  );
};

export default EventsSubPage;
