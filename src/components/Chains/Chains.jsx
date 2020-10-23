import React, { useState, useEffect } from 'react';

const Chains = ({ name }) => {
  const [title, setTitle] = useState('');

  useEffect(() => {
    setTitle(title);
  });

  return (
    <div className='chains-container'>
      <h2>{title}</h2>
      <button onClick={() => setTitle('Ray')}>Update title</button>
    </div>
  );
};

export default Chains;
