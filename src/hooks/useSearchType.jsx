import { useState, useEffect } from "react";
import useApiFetch from "./useApiFetch";
import axios from "axios";

function useSearchType(searchQuery, type) {
    const token = useApiFetch();
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          if (!token || !searchQuery) return;
          try {
            const response = await axios.get(`https://api.spotify.com/v1/search`, {
              params: {
                q: searchQuery,
                type: type,
                limit: 10,
              },
              headers: {
                'Authorization': `Bearer ${token}`
              }
            });
              console.log(response.data);
            setSearchResult(response.data[`${type}s`].items);
          } catch (error) {
            console.error('Error fetching search results:', error);
          }
        };
    
        fetchData();
      }, [token, searchQuery, type]);
    
      return searchResult;
    }
    
    export default useSearchType;