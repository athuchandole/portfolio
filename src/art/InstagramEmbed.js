// src/art/InstagramEmbed.js
import React, { useEffect } from 'react';
import './InstagramEmbed.css'; // Import the CSS file

// Component to embed a single Instagram post
const InstagramEmbed = ({ url }) => {
  useEffect(() => {
    // Instagram embeds need to be processed using their script
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, []);

  return (
    <div className="instagram-embed">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="13"
      >
        <a href={url} target="_blank" rel="noopener noreferrer">
          View this post on Instagram
        </a>
      </blockquote>
    </div>
  );
};

// Component to display multiple Instagram posts
const InstagramEmbedContainer = ({ posts }) => {
  return (
    <div className="instagram-embed-container">
      {posts.map((postUrl, index) => (
        <InstagramEmbed key={index} url={postUrl} />
      ))}
    </div>
  );
};

export default InstagramEmbedContainer;
