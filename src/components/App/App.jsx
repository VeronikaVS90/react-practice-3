import { Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout/Layout';
import { HomePage } from '../../pages/HomePage';
import { EventsPage } from '../../pages/EventsPage';
import { SearchPage } from '../../pages/SearchPage';
// import  EventSubPage from 'components/EventsSubPage/EventsSubPage';
import { EventDetails } from '../EventDetails/EventDetails';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="events" element={<EventsPage />} />
        <Route path="/events/:eventId" element={<EventDetails />} />

        <Route path="search" element={<SearchPage />} />
        <Route path="/search/:eventId" element={<EventDetails />} />
      </Route>
    </Routes>
  );
};
