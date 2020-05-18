import React from 'react';
import PropTypes from 'prop-types';

const Home = ({ history }) => {
  return (
    <>
      <button onClick={() => history.push('/shelf')}>Bookshelf</button>
      <button onClick={() => history.push('/form')}>Add Book</button>
    </>
  );
};

Home.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default Home;
