import { useState, useEffect } from "react";
import axios from "axios";

const clientId = import.meta.env.VITE_REACT_APP_CLIENT_ID;
const clientSecret = import.meta.env.VITE_REACT_APP_CLIENT_SECRET;

function useApiFetch() {
  const [token, setToken] = useState('');

  // Fetch token using axios and your Client ID and Client Secret
  const getToken = async () => {
    const result = await axios.post('https://accounts.spotify.com/api/token', `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
    const data = await result.data;
    return data.access_token
  }

  useEffect(() => {
    const fetchToken = async () => {
      const token = await getToken();
      setToken(token)
    }
    fetchToken();
  }, []);

  return token
}

export default useApiFetch