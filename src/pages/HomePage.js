import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';

import { addMember } from '../slices/memberSlice';

import Layout from '../components/Layout';

const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(
      addMember({
        id: 1,
        name: 'Cenk',
        lastName: 'SARI',
        emailAddress: 'cenk@cenksari.com',
      })
    );

    navigate('/profile');
  };

  return (
    <Layout>
      <section>
        <h1>Home page</h1>
        <p>
          <button type='button' onClick={() => handleLogin()}>
            Login
          </button>
        </p>
      </section>
    </Layout>
  );
};

export default HomePage;
