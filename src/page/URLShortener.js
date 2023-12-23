// URLShortener.js
import React, { useState } from 'react';

const URLShortener = () => {
  // Example state to store the long URL entered by the user
  const [longURL, setLongURL] = useState('');
  // Example state to store the generated short URL
  const [shortURL, setShortURL] = useState('');

  // Example function to handle the form submission
  const handleShortenURL = () => {
    // Implement the logic to send the long URL to your backend for shortening
    // For demonstration purposes, generating a random short URL
    const randomShortURL = Math.random().toString(36).substring(7);
    setShortURL(randomShortURL);
  };

  return (
    <div>
      <h2>URL Shortener</h2>
      <div>
        <label htmlFor="longURL">Long URL:</label>
        <input
          type="text"
          id="longURL"
          value={longURL}
          onChange={(e) => setLongURL(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleShortenURL}>Shorten URL</button>
      </div>
      {shortURL && (
        <div>
          <p>Short URL: {shortURL}</p>
        </div>
      )}
    </div>
  );
};

export default URLShortener;
