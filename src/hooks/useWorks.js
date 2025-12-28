// src/hooks/useTracks.js
import { useEffect, useState } from "react";
import { getWorks } from "../services/works"

const useWorks = () => {
  const [works, setWorks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getWorks()
      .then(setWorks)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  return { works, loading, error };
};

export default useWorks;
