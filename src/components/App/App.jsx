import { Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout/Layout';
import { HomePage } from '../../pages/HomePage';
import { EventsPage } from '../../pages/EventsPage';
import { SearchPage } from '../../pages/SearchPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="events" element={<EventsPage />}></Route>
        <Route path="search" element={<SearchPage />}></Route>
      </Route>
    </Routes>
  );
};
