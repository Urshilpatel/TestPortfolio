import React, { useState, useEffect } from 'react';
import axios from 'axios';

const News = () => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);

  const fetchNews = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/news?category=technology');
      setNews(response.data.articles);
    } catch (error) {
      setError('Error fetching news data');
      console.error('Error fetching news data:', error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div>
      <h1>Technology News</h1>
      {error && <p>{error}</p>}
      <ul>
        {news.map((article, index) => (
          <li key={index}>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              {article.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;
