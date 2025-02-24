import React from 'react';

const Alert = () => {
  return (
   <Alert variant="danger" className="d-flex align-items-center">
      <svg
        className="bi flex-shrink-0 me-2"
        width="24"
        height="24"
        role="img"
        aria-label="Danger:"
      >
        <use xlinkHref="#exclamation-triangle-fill" />
      </svg>
      <div>
        An example danger alert with an icon
      </div>
    </Alert>
  );
};

export default Alert;
