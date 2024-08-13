import { useState } from "react";

const useGithub = (username) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const onButton = () => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}`
        );
        const responseData = await response.json();
        console.log(responseData);
        setUser(responseData);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  };
  return [user, error, loading, onButton];
};
export default useGithub;
