import { useState } from 'react';

const useApi = baseUrl => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = async (method, url, data) => {
    setIsLoading(true);
    setError(null);

    const headers = {
      'Content-Type': 'application/json',
    };

    const options = {
      method,
      headers,
      body: data ? JSON.stringify(data) : null,
    };

    try {
      const response = await fetch(baseUrl + url, options);
      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message || 'Something went wrong.');
      }

      setIsLoading(false);
      return responseData;
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
      throw err;
    }
  };

  const get = url => request('GET', url);
  const post = (url, data) => request('POST', url, data);
  const put = (url, data) => request('PUT', url, data);
  const delApi = url => request('DELETE', url);

  return { isLoading, error, get, post, put, delApi };
};

export default useApi;
