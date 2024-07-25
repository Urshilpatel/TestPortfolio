import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GitHubRepos = () => {
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);

  const fetchRepos = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/github');
      setRepos(response.data);
    } catch (error) {
      setError('Error fetching GitHub data');
      console.error('Error fetching GitHub data:', error);
    }
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">GitHub Repositories</h1>
      {error && <p className="text-red-500">{error}</p>}
      <ul className="space-y-4">
        {repos.map((repo) => (
          <li key={repo.id} className="bg-white p-4 rounded shadow">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {repo.name}
            </a>
            <p className="text-gray-600">{repo.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GitHubRepos;
