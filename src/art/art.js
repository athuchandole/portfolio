// Example of how to use the InstagramEmbedContainer component in your App
import React from 'react';
import InstagramEmbedContainer from './InstagramEmbed';

const App = () => {
  // Array of Instagram post URLs
  const postUrls = [
    'https://www.instagram.com/p/DESvwVEyvux/?igsh=MW0wbHcycTh6eTlwZw==',
    'https://www.instagram.com/p/DESvwVEyvux/?igsh=MW0wbHcycTh6eTlwZw==',
    'https://www.instagram.com/p/DESvwVEyvux/?igsh=MW0wbHcycTh6eTlwZw==',
    'https://www.instagram.com/p/DESvwVEyvux/?igsh=MW0wbHcycTh6eTlwZw==',
    'https://www.instagram.com/p/DESvwVEyvux/?igsh=MW0wbHcycTh6eTlwZw==',
    'https://www.instagram.com/p/DESvwVEyvux/?igsh=MW0wbHcycTh6eTlwZw==',
    'https://www.instagram.com/p/DESvwVEyvux/?igsh=MW0wbHcycTh6eTlwZw==',
    'https://www.instagram.com/p/DESvwVEyvux/?igsh=MW0wbHcycTh6eTlwZw==',
  ];

  return (
    <div>
      <InstagramEmbedContainer posts={postUrls} />
    </div>
  );
};

export default App;
