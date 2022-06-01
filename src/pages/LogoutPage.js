import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';

import { removeMember } from '../slices/memberSlice';

import Layout from '../components/Layout';

const LogoutPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(removeMember());

    navigate('/');
  }, []);

  return (
    <Layout>
      <section>
        <h1>Logout page</h1>
      </section>
    </Layout>
  );
};

export default LogoutPage;
