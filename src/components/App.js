import React from 'react';
import PropTypes from 'prop-types';

import '../assets/styles/App.scss';


const App = ({ name }) => {
  return (
    <h1>Yet another Sinatra running on 8080 with webpack , {name}!</h1>
  );
};

App.propTypes = {
  name: PropTypes.string,
};

export default App;
