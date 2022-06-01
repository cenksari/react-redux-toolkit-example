import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

import Layout from '../components/Layout';

const ProfilePage = () => {
  const navigate = useNavigate();

  const { member } = useSelector((state) => state.member);

  useEffect(() => {
    if (!member) {
      navigate('/');
    }
  }, [member]);

  return (
    <Layout>
      <section>
        <h1>Profile page</h1>

        {member && (
          <>
            <p>
              <strong>ID:</strong> {member.id}
            </p>
            <p>
              <strong>Name:</strong> {member.name} {member.lastName}
            </p>
          </>
        )}
      </section>
    </Layout>
  );
};

export default ProfilePage;
