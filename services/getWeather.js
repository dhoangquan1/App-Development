import { useState, useEffect } from "react";
import axios from "axios";

const getWeather = ({lat, long}) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  //GET url for the grid of the location
  const option1 = {
    method: "GET",
    url: `https://api.weather.gov/points/${lat.toFixed(4)},${long.toFixed(4)}`,
    headers: {
      'content-type' : 'application/json',
      'User-Agent' : 'quandd.dldq@gmail.com'
    },
  };

  //GET weather data for the grid
  const option2 = (link) => ({
    method: "GET",
    url: `${link}`,
    headers: {
      'content-type' : 'application/json',
      'User-Agent' : 'quandd.dldq@gmail.com'
    },
  });

  const fetchData = async () => {
    setIsLoading(true);

    try {
      axios.request(option1)
      .then((response)=> axios.request(option2(response.properties.forecast)))
      .then((response)=> {setData(response.properties.periods)})
      .catch((error) => console.error(error));
      setIsLoading(false);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch};
};

export default getWeather;