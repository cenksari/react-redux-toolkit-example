import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import PropTypes from 'prop-types';

const mapStateToProps = (state) => ({
  member: state.member.member,
  language: state.language.language,
});

const Header = ({ member, language }) => (
  <header className='flex flex-space-between'>
    <div>
      <NavLink to='/'>Home</NavLink>
      {member && (
        <>
          &nbsp; &bull; &nbsp;
          <NavLink to='/profile'>Profile</NavLink>
          &nbsp; &bull; &nbsp;
          <NavLink to='/logout'>Logout</NavLink>
        </>
      )}
      &nbsp; &bull; &nbsp;
      <span>Lang: {language}</span>
    </div>
    <div>
      {member ? (
        <p>
          {member.name} {member.lastName}
        </p>
      ) : (
        <p>Please login</p>
      )}
    </div>
  </header>
);

Header.defaultProps = {
  member: null,
  language: 'tr',
};

Header.propTypes = {
  member: PropTypes.oneOfType([PropTypes.object]),
  language: PropTypes.string,
};

export default connect(mapStateToProps)(Header);
