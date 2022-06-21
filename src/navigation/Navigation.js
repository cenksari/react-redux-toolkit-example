import { Routes, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import ProfilePage from '../pages/ProfilePage';
import LogoutPage from '../pages/LogoutPage';

const Navigation = () => (
  <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='/profile' element={<ProfilePage />} />
    <Route path='/logout' element={<LogoutPage />} />
  </Routes>
);

export default Navigation;
