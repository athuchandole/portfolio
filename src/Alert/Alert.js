import React from 'react';

const Alert = () => {
  return (
    <div className="alert alert-danger" role="alert">
      A simple danger alert with{' '}
      <a href="#" className="alert-link">
        an example link
      </a>. Give it a click if you like.
    </div>
  );
};

export default Alert;
